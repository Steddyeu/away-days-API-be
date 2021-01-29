const { fetchStadiumByName } = require("./stadiums");
const axios = require("axios");
const key = process.env.ENVIRONMENT_VARIABLE;

const fetchPubs = (id) => {
  return fetchStadiumByName(id).then((stadium) => {
    const longitude = stadium.longitude;
    const latitude = stadium.latitude;

    let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=bar&key=${key}`;

    if (process.env.NODE_ENV === "test") {
      url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=bar&key=${key}`;
    }
    return axios
      .get(
        `${url}`
      )
      .then((res) => {
        const filteredPubs = res.data.results.map((pub) => {
          //console.log(pub)
          const newPub = {};
          newPub.name = pub.name;
          newPub.lat = pub.geometry.location.lat;
          newPub.long = pub.geometry.location.lng;

          return newPub;
        });
        return filteredPubs;
      });
  });
};

module.exports = fetchPubs;
