
const proyectos = [{
    id: 1,
    nombre: 'Mini sumo',
    descripcion: 'Robot mini sumo para competencias',
    imagen: 'mini_sumo.jpg',
    donatario: 'Diego',
    donadores: 'Andre',
},
{
    id: 2,
    nombre: 'Mega sumo',
    descripcion: 'Gundam',
    imagen: 'gundam.jpg',
    donatario: 'Andre',
    donadores: 'Diego',
}];

const findAll = function() {
    return proyectos;
}

const findById = function(id) {
    let p = proyectos.find(e => e.id == id);
    return p;
}

exports.findAll = findAll;
exports.findById = findById;