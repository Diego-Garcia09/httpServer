const proyectos = require('../modelos/proyecto');
const donadores = require('../modelos/donadores');

const getAll = async function(req, res) {
    let p = proyectos.findAll();
    await res.json(p);
};

const getById = async function(req, res) {
    await res.json(proyectos.findById(req.params.id));
};

const getDonadores = async function(req, res) {
    await res.json(proyectos.getDonadores(req.params.identificador));
}

const getDonatarios = async function(req, res) {
    await res.json(proyectos.getDonatarios(req.params.identificador));
}

const asignarDonador = async function(req, res) {
    const proyecto = req.params.identificador;
    const donador = req.params.donador;

    let p = proyectos.findByIdorName(proyecto);
    if(!isNaN(donador)){
        let d = donadores.findByRFC(donador);
        d.proyectoAsociado.push(p.nombre);
        p.donadores.push(d.nombre);
        await res.status(201).json(p);
    }
    else
    {
        let d = donadores.findByName(donador);
        d.proyectoAsociado.push(p.nombre);
        p.donadores.push(d.nombre);
        await res.status(201).json(p);
    }
    
}

exports.getAll = getAll;
exports.getById = getById;
exports.getDonadores = getDonadores;
exports.getDonatarios = getDonatarios;
exports.asignarDonador = asignarDonador;