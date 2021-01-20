const stadiumsRouter = require("express").Router();
const { getAllStadiums, getStadiumByName } = require("../controllers/stadiums");
const { handle405s } = require("../controllers/errorHandling");

stadiumsRouter.route("/").get(getAllStadiums).all(handle405s);
stadiumsRouter.route("/:stadium").get(getStadiumByName).all(handle405s);

module.exports = stadiumsRouter;
