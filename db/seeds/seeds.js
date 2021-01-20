const { stadiumData, commentData } = require('../data/index');
const {
  createRef,
  createCommentRef,
  formattCommentTimeStamp,
} = require('../../utils');

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => {
      return knex.migrate.latest();
    })
    .then(() => {
      return knex.insert(stadiumData).into('stadiums').returning('*');
    })
    .then((stadiumRows) => {
      const stadiumRef = createRef(stadiumRows, 'name', 'stadium_id');
      const commentsWithFormattedTime = formattCommentTimeStamp(commentData);
      const formattedComments = createCommentRef(
        commentsWithFormattedTime,
        stadiumRef
      );
      return knex.insert(formattedComments).into('comments').returning('*');
    });
};
