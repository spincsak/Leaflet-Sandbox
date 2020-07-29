const db = require('./database.js');
const Market = require('./models/market.js');

//require in any other models

//establish associations

module.exports = {
  db,
  Market,
};
