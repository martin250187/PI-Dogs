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
const cleanArrayPostgres = (arr) =>
  arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      height_min: e.height_min,
      height_max: e.height_max,
      weight_min: e.weight_min,
      weight_max: e.weight_max,
      life_span: e.life_span,
      image: e.image,
      source: "postgres",
      temperaments: e.dataValues.Temperaments.map((elem) => elem.name).join(
        ", "
      ),
    };
  });

const getDogs = async () => {
  const dogsApi = (await axios.get(`${URL}?api_key=${API_KEY}`)).data;
  //console.log(dogsApi);
  const dogsPostgres = await Dog.findAll({
    include: [
      {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  const dogsApiClean = cleanArray(dogsApi);
  const dogsPostgresClean = cleanArrayPostgres(dogsPostgres);
  //console.log(dogsPostgresClean);
  return [...dogsPostgresClean, ...dogsApiClean];
};

const getDogsByName = async (name) => {
  const dogsApi = (await axios.get(`${URL}?api_key=${API_KEY}`)).data;
  const dogsApiClean = cleanArray(dogsApi);
  const dogsPostgres = await Dog.findAll({
    include: [
      {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  const dogsPostgresClean = cleanArrayPostgres(dogsPostgres);
  const filteredApi = dogsApiClean.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );
  console.log(dogsPostgresClean);

  return [...dogsPostgresClean, ...filteredApi];
};

const getDogById = async (id, source) => {
  let dog = {};
  if (source === "api") {
    const dogApi = (await axios.get(`${URL}?api_key=${API_KEY}`)).data.filter(
      (e) => e.id == id
    );
    dog = cleanArray(dogApi);
  } else {
    const dogPostgres = [
      await Dog.findByPk(id, {
        include: { model: Temperament, attributes: ["name"] },
      }),
    ];
    dog = cleanArrayPostgres(dogPostgres);
  }
  return dog;
};

const createDog = async ({
  name,
  height_min,
  height_max,
  weight_min,
  weight_max,
  life_span,
  temperaments,
  image,
}) => {
  const newDog = await Dog.create({
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span,
    image,
  });
  temperaments.map(async (el) => await newDog.addTemperament(el));
  //await newDog.addTemperaments(temperaments);
  return newDog;
};

module.exports = {
  getDogs,
  getDogsByName,
  getDogById,
  createDog,
};
