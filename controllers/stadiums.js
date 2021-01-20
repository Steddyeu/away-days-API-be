const { fetchAllStadiums } = require("../models/stadiums");

const getAllStadiums = (req, res, next) => {
  const sortFilter = req.query.sort_by;
  const orderFilter = req.query.order;
  fetchAllStadiums(sortFilter, orderFilter).then((stadiums) => {
    res.status(200).send({ stadiums });
  })
  .catch(next)
};

const getStadiumByName = (req, res, next) => {};

module.exports = { getAllStadiums };
