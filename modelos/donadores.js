
const donadores = [{
    rfc: 1,
    nombre: 'Diego',
    proyectoAsociado: 'Gundam',
    imagen: 'diego.jpg',
    donacion: 10000,
},
{
    rfc: 2,
    nombre: 'Andre',
    proyectoAsociado: 'Mini sumo',
    imagen: 'adnre.jpg',
    donacion: 10000,
}];

const findAll = function () {
    return donadores;
}

const findByRFC = function (rfc) {
    let d = donadores.find(e => e.rfc == rfc);
    return d;
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;