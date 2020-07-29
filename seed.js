const { green, red } = require('chalk');
const { db, Market } = require('./server/db');
// const Market = require('./server/db/Market');
const { sampleMarkets } = require('./server/db/seedData');

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      sampleMarkets.map((market) => {
        return Market.create(market);
      })
    );
  } catch (error) {
    console.log(red(error));
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeded successfully!'));
      db.close();
    })
    .catch((error) => {
      console.error(red('Something went wrong!'));
      console.error(error);
      db.close();
    });
}
