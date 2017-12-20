const express = require('express');
const middleware = require('../middleware');

const router = express.Router();

router.route(['/', '/*'])
  .get(middleware.auth.render);

module.exports = router;
