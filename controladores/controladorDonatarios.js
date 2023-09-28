const donatarios = require('../modelos/donatarios');
const proyectos = require('../modelos/proyecto');

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

const asignarDonatario = async function(req, res) {
    const proyecto = req.params.proyecto;
    const donatario = req.params.donatario;

    let p = proyectos.findByIdorName(proyecto);
    if(!isNaN(donatario)){
        let d = donatarios.findByRFC(donatario);
        d.proyectoAsociado.push(p.nombre);
        if(d.donatario==null || d.donatario==''){
            p.donatarios.push(d.nombre);
        }
        await res.status(201).json(p);
    }
    else
    {
        let d = donatarios.findByName(donatarios);
        d.proyectoAsociado.push(p.nombre);
        if(d.donatario==null || d.donatario==''){
            p.donatarios.push(d.nombre);
        }
        await res.status(201).json(p);
    }
    
}

const crearDonatario = async function(req, res) {
    const nuevoDonatario = req.body;
    donatarios.crearDonatario(nuevoDonatario);
    res.status(201).json(nuevoDonatario);
}

exports.getAll = getAll;
exports.getByRFC = getByRFC;
exports.getProyectos = getProyectos;
exports.asignarDonatario = asignarDonatario;
exports.crearDonatario = crearDonatario;