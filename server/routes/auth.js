const express = require('express');
const middleware = require('../middleware');

const router = express.Router();

router.route(['/', '/usercontact', '/useraddress', '/*'])
  .get(middleware.auth.render);

router.route('/username')
  .get(middleware.auth.render)
  .post(middleware.passport.authenticate('local-signup', {
    failureRedirect: '/username',
    failureFlash: true
  }), (req, res) => {
    res.redirect('/usercontact');
  });

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  });

module.exports = router;
