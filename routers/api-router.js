const apiRouter = require('express').Router();
const stadiumsRouter = require('./stadiums-router');
const countryRouter = require('./country-router')

apiRouter.use('/stadiums', stadiumsRouter);
apiRouter.use('/country', countryRouter)

module.exports = apiRouter;
