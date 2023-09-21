const donadores = require('../modelos/donadores');

const getAll = async function(req, res) {
    let d = donadores.findAll();
    await res.json(d);
};

const getByRFC = async function(req, res) {
    await res.json(donadores.findByRFC(req.params.rfc));
};

exports.getAll = getAll;
exports.getByRFC = getByRFC;