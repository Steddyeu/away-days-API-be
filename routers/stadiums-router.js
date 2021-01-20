const stadiumsRouter = require('express').Router();
const { getAllStadiums } = require('../controllers/stadiums');

stadiumsRouter.route('/').get(getAllStadiums);

module.exports = stadiumsRouter;
