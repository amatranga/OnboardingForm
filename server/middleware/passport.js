const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../../db/models');

passport.serializeUser((profile, done) => {
  done(null, profile.id);
});

passport.deserializeUser((profile, done) => {
  return models.User.where({ id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      done(null, profile.serialize());
    })
    .error(err => {
      done(err, null);
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
(req, remail, password, done) => {
  return models.User.where({ email }).fetch()
    .then(profile => {
      if (!profile) {
        return models.User.forge({ first_name: req.body.first_name, email: email }).save();
      }
      if (profile) {
        throw profile;
      }
      return profile;
    })
    .tap(profile => {
      return models.Auth.forge({
        password,
        type: 'local',
        user_id: profile.get('id')
      }).save();
    })
    .then(profile => {
      done(null, profile.serialize());
    })
    .error(error => {
      done(error, null);
    })
    .catch(() => {
      done(null, false, req.flash('signupMessage', 'An account with this email already exists'));
    });
}));

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
(req, email, password, done) => {
  return models.User.where({ email }).fetch({
    withRelated: [{
      auths: query => query.where({ type: 'local' })
    }]
  })
    .then(profile => {
      if (!profile || !profile.related('auths').at(0)) {
        throw profile;
      }

      return Promise.all([profile, profile.related('auths').at(0).comparePassword(password)]);
    })
    .then(([profile, match]) => {
      if (!match) {
        throw profile;
      }
      return profile;
    })
    .then(profile => {
      done(null, profile.serialize());
    })
    .error( err => {
      done(err, null);
    })
    .catch(() => {
      done(null, null, req.flash('loginMessage', 'Incorrect username or password'));
    });
}));

module.exports = passport;
