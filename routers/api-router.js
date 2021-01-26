const apiRouter = require('express').Router();
const stadiumsRouter = require('./stadiums-router');
const countryRouter = require('./country-router')

apiRouter.use('/stadiums', stadiumsRouter);
apiRouter.use('/countries', countryRouter)

module.exports = apiRouter;
