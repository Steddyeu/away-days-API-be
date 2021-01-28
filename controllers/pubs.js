const fetchPubs = require("../models/pubs");

const getPubs = (req, res, next) => {
  const id = req.params.stadiumId;
  fetchPubs(id)
    .then((pubs) => {
      res.status(200).send({ pubs });
    })
    .catch(next);
};

module.exports = getPubs;
