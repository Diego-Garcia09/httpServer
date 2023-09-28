
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
    if(!isNaN(rfc)){
        let d = donatarios.find(e => e.rfc == rfc);
        return d;
    }
    else
    {
        let d = findByName(rfc);
        return d;
    }
}

const getProyecto = function (id) {
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
    let d = donatarios.find(e => e.nombre == nombre);
    return d;
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.findByName = findByName;
exports.getProyecto = getProyecto;