const connection = require("../connection");

const fetchAllStadiums = (sortFilter, orderFilter) => {
  
  return connection
    .select("*")
    .from("stadiums")
    .returning("*")
    .orderBy(sortFilter || "club", orderFilter || "asc")
};

module.exports = { fetchAllStadiums };
