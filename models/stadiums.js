const connection = require('../connection');

const fetchAllStadiums = () => {
  return connection
    .select('*')
    .from('stadiums')
    .returning('*')
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { fetchAllStadiums };
