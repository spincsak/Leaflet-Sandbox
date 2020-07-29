const app = require('./server');
const PORT = 5678;
const { db } = require('./server/db');

db.sync().then(() => {
  console.log('database synced');
  app.listen(PORT, () => console.log(`leafing you be on port ${PORT}`));
});
