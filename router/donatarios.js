const express = require('express');
const router = express.Router();
const controladorDonatarios = require('../controladores/controladorDonatarios')

router.get("/", controladorDonatarios.getAll);
router.get("/:rfc", controladorDonatarios.getByRFC);
//router.post("/", controlador.add)
module.exports = router;