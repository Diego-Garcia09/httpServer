const donatarios = require('../modelos/donatarios');

const getAll = async function(req, res) {
    let d = donatarios.findAll();
    await res.json(d);
};

const getByRFC = async function(req, res) {
    await res.json(donatarios.findById(req.params.rfc));
};

exports.getAll = getAll;
exports.getByRFC = getByRFC;