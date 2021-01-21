const {
  fetchAllStadiums,
  fetchStadiumByName,
  fetchCommentsByStadiumId,
  insertCommentByStadiumId,
} = require("../models/stadiums");

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
  const stadiumId = req.params.stadiumId;
  fetchStadiumByName(stadiumId)
    .then((stadium) => {
      res.status(200).send({ stadium });
    })
    .catch(next);
};

const getCommentsByStadiumId = (req, res, next) => {
  const stadiumId = req.params.stadiumId;
  fetchCommentsByStadiumId(stadiumId)
    // if(stadiumId > )
    .then((comments) => {
      res.status(200).send({ comments });
    })
    .catch(next);
};

const postCommentByStadiumId = (req, res, next) => {};

module.exports = {
  getAllStadiums,
  getStadiumByName,
  getCommentsByStadiumId,
  postCommentByStadiumId,
};
