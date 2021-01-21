const stadiumsRouter = require("express").Router();
const {
  getAllStadiums,
  getStadiumByName,
  getCommentsByStadiumId,
  postCommentByStadiumId,
} = require("../controllers/stadiums");
const { handle405s } = require("../controllers/errorHandling");

stadiumsRouter.route("/").get(getAllStadiums).all(handle405s);
stadiumsRouter.route("/:stadiumId").get(getStadiumByName).all(handle405s);
stadiumsRouter
  .route("/:stadiumId/comments")
  .get(getCommentsByStadiumId)
  .post(postCommentByStadiumId);

module.exports = stadiumsRouter;
