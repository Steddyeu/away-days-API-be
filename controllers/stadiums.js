const { fetchAllStadiums } = require('../models/stadiums');

const getAllStadiums = (req, res, next) => {
  fetchAllStadiums().then((stadiums) => {
    res.status(200).send({ stadiums });
  });
};

module.exports = { getAllStadiums };
