const proyectos = require('../modelos/proyecto');

const getAll = async function(req, res) {
    let p = proyectos.findAll();
    await res.json(p);
};

const getById = async function(req, res) {
    await res.json(proyectos.findById(req.params.id));
};

exports.getAll = getAll;
exports.getById = getById;