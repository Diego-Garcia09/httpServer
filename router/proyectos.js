const express = require('express');
const router = express.Router();
const controladorProyecto = require('../controladores/controladorProyecto')

router.get("/", controladorProyecto.getAll);
router.get("/:id", controladorProyecto.getById);
//router.post("/", controlador.add)
module.exports = router;