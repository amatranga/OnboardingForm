const models = require('../../db/models');

module.exports.update = (req, res) => {
  console.log(req, 'req in update');
  models.User.where({ email: req.body.email }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      return profile.save(req.body, { method: 'update' });
    })
    .then(() => {
      res.sendStatus(201);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};
