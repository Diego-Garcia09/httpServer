const express = require('express');
const router = express.Router();
const controladorDonadores = require('../controladores/controladorDonadores')

router.get("/", controladorDonadores.getAll);
router.get("/:rfc", controladorDonadores.getByRFC);
//router.post("/", controlador.add)
module.exports = router;