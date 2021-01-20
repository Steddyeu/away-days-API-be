const stadiumsRouter = require('express').Router();
const {
  getAllStadiums,
  getStadiumByName,
  getCommentsByStadiumId,
} = require('../controllers/stadiums');
const { handle405s } = require('../controllers/errorHandling');

stadiumsRouter.route('/').get(getAllStadiums).all(handle405s);
stadiumsRouter.route('/:stadiumId').get(getStadiumByName).all(handle405s);
stadiumsRouter.route('/:stadiumId/comments').get(getCommentsByStadiumId);

module.exports = stadiumsRouter;
