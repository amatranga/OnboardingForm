'use strict';
const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const UserController = require('../controllers').Users;

router.route('/')
  .post(middleware.passport.authenticate('local-signup', {
    failureRedirect: '/username',
    failureFlash: true
  }), (req, res) => {
    res.redirect('/usercontact');
  })
  .put(UserController.update);

module.exports = router;
