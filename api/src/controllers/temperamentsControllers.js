const axios = require("axios");
const { Temperament } = require("../db");
const { API_KEY } = process.env;
const URL = "https://api.thedogapi.com/v1/breeds";

const getTemp = async () => {
  const { data } = await axios.get(`${URL}?api_key=${API_KEY}`);
  let results = [];
  data.map((x) => {
    if (x.temperament) {
      var words = x.temperament.split(", ");
      words.forEach((temp) => {
        if (!results.includes(temp)) {
          results.push(temp);
        }
      });
    }
  });
  return results;
};

const createTemp = async ({ name }) => {
  const newTemp = await Temperament.create({
    name,
  });
  return newTemp;
};
module.exports = {
  getTemp,
  createTemp,
};
