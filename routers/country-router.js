const countryRouter = require("express").Router();
const getStadiumsByCountry = require("../controllers/country");
const { handle405s } = require("../controllers/errorHandling");

countryRouter.route("/:country").get(getStadiumsByCountry).all(handle405s);

module.exports = countryRouter;
