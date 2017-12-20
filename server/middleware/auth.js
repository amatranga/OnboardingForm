const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const models = require('../../db/models');
const redisClient = require('redis').createClient(process.env.REDISCLOUD_URL);

module.exports.render = (req, res) => {
  res.render('index.ejs', {user: JSON.stringify(req.user)});
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: process.env.REDISCLOUD_URL,
    port: 6379
  }),
  secret: 'Never gonna give you up! Never gonna let you down!',
  resave: false,
  saveUninitialized: false
});
