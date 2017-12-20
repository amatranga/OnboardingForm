const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../../db/models');

passport.serializeUser((profile, done) => {
  done(null, profile.id);
});

passport.deserializeUser((id, done) => {
  return models.Profile.where({ id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      done(null, profile.serialize());
    })
    .error(error => {
      done(error, null);
    })
    .catch(() => {
      done(null, null, { message: 'No user found' });
    });
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
(req, email, password, done) => {
  // check to see if there is an account with this id
  return models.User.where({ email }).fetch()
    .then(profile => {
      // create a new profile if a profile does not exist
      if (!profile) {
        return models.User.forge({ first: req.body.first, email: email }).save();
      }
      // throw if any auth account already exists
      if (profile) {
        throw profile;
      }
      return profile;
    })
    .tap(profile => {
      // create a new local auth account with the user's profile id
      return models.Auth.forge({
        password,
        type: 'local',
        profile_id: profile.get('id')
      }).save();
    })
    .then(profile => {
      // serialize profile for session
      done(null, profile.serialize());
    })
    .error(error => {
      done(error, null);
    })
    .catch(() => {
      done(null, false, req.flash('signupMessage', 'An account with this email address already exists.'));
    });
}));

module.exports = passport;
