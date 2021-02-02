const apiRouter = require('express').Router();
const stadiumsRouter = require('./stadiums-router');
const countryRouter = require('./country-router')
const pubsRouter = require('./pubs-router')

apiRouter.use('/stadiums', stadiumsRouter);
apiRouter.use('/countries', countryRouter)
apiRouter.use('/pubs', pubsRouter)
module.exports = apiRouter;
