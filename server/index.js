require('dotenv').config();
const app = require('./app');
const db = require('../db');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Onboarding application running at port: ${PORT}`);
});
