const apiRouter = require('express').Router();
const stadiumsRouter = require('./stadiums-router');
const countryRouter = require('./country-router');
const pubsRouter = require('./pubs-router');
const { handle405s } = require('../controllers/errorHandling');
const endpoints = require('../endpoints');

apiRouter
  .route('/')
  .get((req, res) => res.status(200).send(endpoints))
  .all(handle405s);

apiRouter.use('/stadiums', stadiumsRouter);
apiRouter.use('/countries', countryRouter);
apiRouter.use('/pubs', pubsRouter);
module.exports = apiRouter;
