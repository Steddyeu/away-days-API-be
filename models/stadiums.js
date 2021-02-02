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

const fetchCommentsByStadiumId = (stadiumId, sortFilter, orderFilter) => {
  return checkStadiumExists(stadiumId).then((bool) => {
    if (!bool) {
      return Promise.reject({ status: 404, msg: 'stadium not found' });
    } else {
      return connection
        .select('*')
        .from('comments')
        .where('stadium_id', '=', stadiumId)
        .then((res) => {
          return res;
        });
    }
  });
};

const insertCommentByStadiumId = (id, comment) => {
  comment.stadium_id = id;

  return connection
    .insert(comment)
    .into('comments')
    .returning('*')
    .then((res) => {
      return res[0];
    });
};

const checkStadiumExists = (id) => {
  return connection
    .select('*')
    .from('stadiums')
    .where('stadium_id', '=', id)
    .then((res) => {
      if (res.length === 0) {
        return false;
      } else {
        return true;
      }
    });
};
module.exports = {
  fetchAllStadiums,
  fetchStadiumByName,
  fetchCommentsByStadiumId,
  insertCommentByStadiumId,
};
