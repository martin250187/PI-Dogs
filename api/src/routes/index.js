const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerDogs = require("./dogs");
const routerTemp = require("./temperaments");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", routerDogs);
router.use("/temperaments", routerTemp);

module.exports = router;
