const donadores = require('../modelos/donadores');

const getAll = async function(req, res) {
    let d = donadores.findAll();
    await res.json(d);
};

const getByRFCorName = async function(req, res) {
    if (!isNaN(req.params.identificador)) {
        await res.json(donadores.findByRFC(req.params.identificador));
    }
    else
    {
        await res.json(donadores.findByName(req.params.identificador));
    }
};

const getProjects = async function (req, res) {
    await res.json(donadores.getProyectos(req.params.identificador));
}

const crearDonador = async function(req, res) {
    const nuevoDonador = req.body;
    donadores.crearDonador(nuevoDonador);
    res.status(201).json(nuevoDonador);
}

exports.getAll = getAll;
exports.getProjects = getProjects;
exports.getByRFCorName = getByRFCorName;
exports.crearDonador = crearDonador;