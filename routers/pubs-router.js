const pubsRouter = require("express").Router();
const getPubs = require('../controllers/pubs');
const { handle405s } = require("../controllers/errorHandling");

pubsRouter.route("/:stadiumId").get(getPubs).all(handle405s);

module.exports = pubsRouter;


