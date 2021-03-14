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

exports.postCampi = (req, res) => {
    const campusObject = req.body;
    console.log(req.body);
    console.log(campusObject);
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
