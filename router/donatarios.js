const express = require('express');
const router = express.Router();
const controladorDonatarios = require('../controladores/controladorDonatarios')

router.get("/", controladorDonatarios.getAll);
router.get("/:identificador", controladorDonatarios.getByRFC);
router.get("/:identificador/proyectos", controladorDonatarios.getProyectos);
router.post("/", controladorDonatarios.crearDonatario);

module.exports = router;