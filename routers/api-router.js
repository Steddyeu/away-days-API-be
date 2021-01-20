const apiRouter = require('express').Router();
const stadiumsRouter = require('./stadiums-router');

apiRouter.use('/stadiums', stadiumsRouter);

module.exports = apiRouter;
