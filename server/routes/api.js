'use strict';
const express = require('express');
const router = express.Router();

router.route('/')
  .post((req, res) => {
    res.status(201).send({ data: 'Posted!' });
  })
  .put((req, res) => {
    res.status(200).send('Updated!');
  });

module.exports = router;
