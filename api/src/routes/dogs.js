const { Router } = require("express");
const validate = require("../middlewares/validate");
const {
  getDogsHandler,
  getDogHandler,
  createDogHandler,
} = require("../handlers/dogsHandlers");

const routerDogs = Router();

routerDogs.get("/", getDogsHandler);

routerDogs.get("/:id", getDogHandler);

routerDogs.post("/", validate, createDogHandler);

module.exports = routerDogs;
