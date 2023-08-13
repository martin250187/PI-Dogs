const axios = require("axios");
const { Op } = require("sequelize");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;
const URL = "https://api.thedogapi.com/v1/breeds";

const cleanArray = (arr) =>
  arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      breed_group: e.breed_group,
      height_min: parseInt(e.height.metric.slice(0, 2).trim()),
      height_max: parseInt(e.height.metric.slice(4).trim()),
      weight_min: parseInt(e.weight.metric.slice(0, 2).trim()),
      weight_max: parseInt(e.weight.metric.slice(4).trim()),
      life_span: e.life_span,
      temperaments: e.temperament,
      image: e.image.url,
      source: "api",
    };
  });

const getDogs = async () => {
  const dogsApi = (await axios.get(`${URL}?api_key=${API_KEY}`)).data;
  const dogsPostgres = await Dog.findAll();
  const dogsApiClean = cleanArray(dogsApi);

  return [...dogsPostgres, ...dogsApiClean];
};

const getDogsByName = async (name) => {
  const dogsApi = (await axios.get(`${URL}?api_key=${API_KEY}`)).data;
  const dogsApiClean = cleanArray(dogsApi);
  const dogsPostgres = await Dog.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
  });
  const filteredApi = dogsApiClean.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );

  return [...dogsPostgres, ...filteredApi];
};

const getDogById = async (id, source) => {
  let dog = {};
  if (source === "api") {
    const dogApi = (await axios.get(`${URL}?api_key=${API_KEY}`)).data.filter(
      (e) => e.id == id
    );
    dog = cleanArray(dogApi);
  } else
    dog = [
      await Dog.findByPk(id, {
        include: { model: Temperament, attributes: ["name"] },
      }),
    ];

  return dog;
};

const createDog = async ({
  name,
  height,
  weight,
  life_span,
  temperaments,
  image,
}) => {
  const newDog = await Dog.create({
    name,
    height,
    weight,
    life_span,
    temperaments,
    image,
  });
  return newDog;
};

module.exports = {
  getDogs,
  getDogsByName,
  getDogById,
  createDog,
};
