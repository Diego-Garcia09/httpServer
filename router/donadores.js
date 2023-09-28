const express = require('express');
const router = express.Router();
const controladorDonadores = require('../controladores/controladorDonadores')

router.get("/", controladorDonadores.getAll);
router.get("/:identificador", controladorDonadores.getByRFCorName);
router.get("/:identificador/proyectos", controladorDonadores.getProjects)
router.post("/", controladorDonadores.crearDonador);

module.exports = router;