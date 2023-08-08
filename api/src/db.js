require("dotenv").config();
const { Sequelize } = require("sequelize");
const dogModel = require("./models/Dog");
const tempModel = require("./models/Temperament");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

// En sequelize.models están todos los modelos importados como propiedades
dogModel(sequelize);
tempModel(sequelize);

// Para relacionarlos hacemos un destructuring
const { Dog, Temperament } = sequelize.models;

// Aca vendrian las relaciones
Dog.belongsToMany(Temperament, { through: "DogTemperament" });
Temperament.belongsToMany(Dog, { through: "DogTemperament" });

module.exports = {
  ...sequelize.models,
  sequelize, // para importart la conexión { conn } = require('./db.js');
};
