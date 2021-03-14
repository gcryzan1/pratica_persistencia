const Campus = require('../models/campi');

exports.index = (req, res) => {
    Campus.find({})
        .then((campus) => {
            res.json(campus);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send({
                erro: 'Não foi possivel realizar operação',
            });
        });
};

exports.getByCodigo = (req, res) => {
    const { codigo } = req.params;
    Campus.find({ codigo: codigo })
        .then((campus) => {
            res.json(campus);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send({
                erro: 'Não foi possivel realizar operação',
            });
        });
};

exports.deleteByCodigo = (req, res) => {
    const { codigo } = req.params;
    Campus.findOneAndDelete({ codigo: codigo })
        .then((campus) => {
            res.json(campus);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send({
                erro: 'Não foi possivel realizar operação',
            });
        });
};

exports.postCampi = (req, res) => {
    const campusObject = req.body;
    Campus.create(campusObject)
        .then((campus) => {
            res.status(200).send(campus);
        })
        .catch((err) => {
            console.log(err);
            res.status(403).send({
                erro: 'Não foi possivel realizar operação',
            });
        });
};
