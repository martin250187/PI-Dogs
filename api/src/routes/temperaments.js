const { Router } = require("express");
const {
  getTempHandler,
} = require("../handlers/tempHandlers");
const routerTemp = Router();

routerTemp.get("/", getTempHandler);

module.exports = routerTemp;
