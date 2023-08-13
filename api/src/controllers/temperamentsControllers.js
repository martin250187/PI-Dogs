const axios = require("axios");
const { Temperament, Dog } = require("../db");
const { API_KEY } = process.env;
const URL = "https://api.thedogapi.com/v1/breeds";

const getTemperaments = async () => {
  try {
    const dbTemperament = await Temperament.findAll({
      include: [
        {
          model: Dog,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!dbTemperament.length) {
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
      results;
      for (const temp of results) {
        await Temperament.findOrCreate({ where: { name: temp } });
      }
      const getAllTemperaments = await Temperament.findAll();
      return getAllTemperaments;
    } else {
      return dbTemperament;
    }
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getTemperaments,
};
