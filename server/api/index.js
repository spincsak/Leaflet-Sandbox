const router = require('express').Router();

//put routes here

//route not found:
router.use((req, res, next) => {
  const err = new Error('Whoops! API route not found');
  err.status = 404;
  next(err);
});

module.exports = router;
