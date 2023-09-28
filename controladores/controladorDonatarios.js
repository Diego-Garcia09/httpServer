const donatarios = require('../modelos/donatarios');

const getAll = async function(req, res) {
    let d = donatarios.findAll();
    await res.json(d);
};

const getByRFC = async function(req, res) {
    await res.json(donatarios.findByRFC(req.params.identificador));
};

const getProyectos = async function(req, res) {
    await res.json(donatarios.getProyecto(req.params.identificador));
}

exports.getAll = getAll;
exports.getByRFC = getByRFC;
exports.getProyectos = getProyectos;