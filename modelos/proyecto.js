
const proyectos = [{
    id: 1,
    nombre: 'Mini sumo',
    descripcion: 'Robot mini sumo para competencias',
    imagen: 'mini_sumo.jpg',
    donatario: null,
    donadores: ['Andre'],
    donacion: 100000,
},
{
    id: 2,
    nombre: 'Mega sumo',
    descripcion: 'Gundam',
    imagen: 'gundam.jpg',
    donatario: 'Andre',
    donadores: ['Diego'],
    donacion: 2000000,
}];

const findAll = function() {
    return proyectos;
}

const findByIdorName = function (identificador) {
    if(!isNaN(identificador)){
        return findById(identificador);
    }
    else
    {
        return findByName(identificador);
    }
}

const findById = function(id) {
    let p = proyectos.find(e => e.id == id);
    return p;
}

const getDonadores = function (id) {
    if(!isNaN(id)){
        let d = findById(id);
        return d.donadores;
    }
    else
    {
        let d = findByName(id);
        return d.donadores;
    }
}

const getDonatarios = function (id) {
    if(!isNaN(id)){
        let d = findById(id);
        return d.donatario;
    }
    else
    {
        let d = findByName(id);
        return d.donatario;
    }
}

const findByName = function (nombre) {
    let n = proyectos.find(e => e.nombre == nombre);
    return n;
}

const asignarDonatario = function (nuevoDonatario) {
    if (proyectos.donatario == null || proyectos.donatario == '')
    {
        proyectos.donatario == nuevoDonatario;
    }
    else
    {
        console.log("Ya existe donatario");
    }
}

const crearProyecto = function (nuevoProyecto) {
    proyectos.push(nuevoProyecto);
}

exports.findByName = findByName;
exports.findAll = findAll;
exports.findById = findById;
exports.getDonadores = getDonadores;
exports.getDonatarios = getDonatarios;
exports.findByIdorName = findByIdorName;
exports.asignarDonatario = asignarDonatario;
exports.crearProyecto = crearProyecto;