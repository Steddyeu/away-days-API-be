const stadiums = require("./db/data/development-data/stadiums");

const createRef = (stadiumList, name, id) => {
  const refObj = {};

  stadiumList.forEach((stadium) => {
    refObj[stadium[name]] = stadium[id];
  });

  return refObj;
};

const formattCommentTimeStamp = (commentData) => {
  const timeStampedComments = commentData.map((comment) => {
    const newComment = { ...comment };
    newComment.created_at = new Date(comment["created_at"]);
    return newComment;
  });
  return timeStampedComments;
};

const createCommentRef = (commentData, stadiumRef) => {
  const formattedComments = commentData.map((comment) => {
    const newComment = { ...comment };
    newComment.stadium_id = stadiumRef[comment.stadium];
    delete newComment.stadium;
    return newComment;
  });
  return formattedComments;
};

module.exports = { createRef, createCommentRef, formattCommentTimeStamp };
