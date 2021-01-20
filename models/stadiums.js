const connection = require("../connection");

const fetchAllStadiums = (sortFilter, orderFilter) => {
  return connection
    .select("*")
    .from("stadiums")
    .returning("*")
    .orderBy(sortFilter || "club", orderFilter || "asc");
};

const fetchStadiumByName = (stadium) => {
  //console.log('stadium--->', stadium)
  return connection
    .select("*")
    .from("stadiums")
    .where("name", "=", stadium)
    .then((res) => {
      if (res.length === 0) {
        return Promise.reject({
          status: 404,
          msg: `No stadium with the name ${stadium} found`,
        });
      } else {
        return res[0];
      }
    });
};

module.exports = { fetchAllStadiums, fetchStadiumByName };
