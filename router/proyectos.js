const express = require('express');
const router = express.Router();
const controladorProyecto = require('../controladores/controladorProyecto')

router.get("/", controladorProyecto.getAll);
router.get("/:id", controladorProyecto.getById);
router.get("/:identificador/donadores", controladorProyecto.getDonadores)
router.get("/:identificador/donatarios", controladorProyecto.getDonatarios)
router.post("/:identificador/:donador", controladorProyecto.asignarDonador)
//router.post("/", controlador.add)
module.exports = router;