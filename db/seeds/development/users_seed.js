const models = require('../../models');

exports.seed = function(knex, Promise) {

  return models.User.where({ email: 'test@domain.com'}).fetch()
    .then(profile => {
      if (profile) {
        throw profile;
      }
      return models.User.forge({
        username: 'TestUser',
        email: 'test@domain.com',
        first_name: 'Test',
        last_name: 'User',
        phone_number: '555-555-5555',
        street: '555 Main Street',
        city: 'SpringField',
        state: 'Unknown',
        zip_code: '55555'
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create user');
      throw err;
    })
    .then(profile => {
      return models.Auth.forge({
        password: 'examplePassword123',
        user_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
      throw err;
    })
    .catch(() => {
      console.log('WARNING: default user already exists');
    });
};
