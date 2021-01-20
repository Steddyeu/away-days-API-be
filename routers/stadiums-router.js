const stadiumsRouter = require("express").Router();
const { getAllStadiums, getStadiumByName } = require("../controllers/stadiums");

stadiumsRouter.route("/").get(getAllStadiums);
// stadiumsRouter.route("/stadiums/:name").get(getStadiumByName);

module.exports = stadiumsRouter;
