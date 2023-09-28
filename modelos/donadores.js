
const donadores = [
    {
        rfc: 1,
        nombre: 'Diego',
        proyectoAsociado: ['Gundam'],
        imagen: 'diego.jpg',
        donacion: 10000,
    },
    {
        rfc: 2,
        nombre: 'Andre',
        proyectoAsociado: ['Mini sumo'],
        imagen: 'andre.jpg',
        donacion: 10000,
    },
];

const findAll = function () {
    return donadores;
}

const findByRFC = function (rfc) {
    let d = donadores.find(e => e.rfc == rfc);
    return d;
}

const getProyectos = function (id) {
    if(!isNaN(id)){
        let d = findByRFC(id);
        return d.proyectoAsociado;
    }
    else
    {
        let d = findByName(id);
        return d.proyectoAsociado;
    }
}

const findByName = function (nombre) {
    let n = donadores.find(e => e.nombre == nombre);
    return n;
}

const crearDonador = function (nuevoDonador) {
    donadores.push(nuevoDonador);
}

const existeDonador = function(donador) {
    if(!isNaN(id)){
        let d = null;
        d = findByRFC(id);
        if(d!=null){
            return true;
        }
    }
    else
    {
        let d = null;
        d = findByName(id);
        if(d!=null){
            return true;
        }
    }
    return false;
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.findByName = findByName;
exports.crearDonador = crearDonador;
exports.getProyectos = getProyectos;
exports.existeDonador = existeDonador;