const { Router } = require("express");
const { getTempHandler, createTempHandler } = require("../handlers/tempHandlers");
const routerTemp = Router();

routerTemp.get("/", getTempHandler);
routerTemp.post("/", createTempHandler);

module.exports = routerTemp;
