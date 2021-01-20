const { fetchAllStadiums, fetchStadiumByName } = require("../models/stadiums");

const getAllStadiums = (req, res, next) => {
  const sortFilter = req.query.sort_by;
  const orderFilter = req.query.order;
  fetchAllStadiums(sortFilter, orderFilter)
    .then((stadiums) => {
      res.status(200).send({ stadiums });
    })
    .catch(next);
};

const getStadiumByName = (req, res, next) => {
  const stadium = req.params.stadium;
  //console.log('stadium-->', stadium)
  fetchStadiumByName(stadium)
    .then((stadium) => {
      res.status(200).send({ stadium });
    })
    .catch(next);
};

module.exports = { getAllStadiums, getStadiumByName };
