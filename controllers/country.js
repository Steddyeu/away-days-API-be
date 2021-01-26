const fetchStadiumsByCountry = require("../models/country");

const getStadiumsByCountry = (req, res, next) => {
  const country = req.params.country;
  const sortFilter = req.query.sort_by;
  const orderFilter = req.query.order;
  fetchStadiumsByCountry(country, sortFilter, orderFilter)
    .then((stadiums) => {
      res.status(200).send({ stadiums });
    })
    .catch(next);
};

module.exports = getStadiumsByCountry;
