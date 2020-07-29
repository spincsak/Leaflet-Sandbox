const chalk = require('chalk');
const Sequelize = require('sequelize');
const dbName = 'leaflet-sandbox';

console.log(chalk.yellow(`Opening connection to ${dbName}`));
const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  logging: false,
});

module.exports = db;
