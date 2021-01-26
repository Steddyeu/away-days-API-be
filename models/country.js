const connection = require("../connection");

const fetchStadiumsByCountry = (country, sortFilter, orderFilter) => {
  return connection
    .select("*")
    .from("stadiums")
    .where("country", "=", country)
    .orderBy(sortFilter || "capacity", orderFilter || "desc")
    .then((res) => {
      if (res.length === 0) {
        return Promise.reject({
          status: 404,
          msg: `Cannot find stadiums in ${country}`,
        });
      } else {
        return res;
      }
    });
};

module.exports = fetchStadiumsByCountry;
