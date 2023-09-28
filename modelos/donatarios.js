
const donatarios = [{
    rfc: 1,
    nombre: 'Diego',
    proyectoAsociado: 'Gundam',
    imagen: 'diego.jpg',

},
{
    rfc: 2,
    nombre: 'Andre',
    proyectoAsociado: 'Mini sumo',
    imagen: 'adnre.jpg',
}];

const findAll = function () {
    return donatarios;
}

const findByRFC = function (rfc) {
    let d = donatarios.find(e => e.rfc == rfc);
    return d;
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;