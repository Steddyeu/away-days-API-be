const connection = require('../connection');

const fetchAllStadiums = (sortFilter, orderFilter) => {
  return connection
    .select('*')
    .from('stadiums')
    .returning('*')
    .orderBy(sortFilter || 'club', orderFilter || 'asc');
};

const fetchStadiumByName = (stadiumId) => {
  return connection
    .select('*')
    .from('stadiums')
    .where('stadium_id', '=', stadiumId)
    .then((res) => {
      if (res.length === 0) {
        return Promise.reject({
          status: 404,
          msg: `No stadium with the id ${stadiumId} found`,
        });
      } else {
        return res[0];
      }
    });
};

const fetchCommentsByStadiumId = (stadiumId) => {
  return connection
    .select('*')
    .from('comments')
    .where('stadium_id', '=', stadiumId)
    .then((res) => {
      return res;
    });
};

module.exports = {
  fetchAllStadiums,
  fetchStadiumByName,
  fetchCommentsByStadiumId,
};
