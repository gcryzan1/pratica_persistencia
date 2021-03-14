const Aluno = require('../models/aluno');

exports.index = (req, res) => {
    Aluno.find({})
        .then((alunos) => {
            res.json(alunos);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send({
                erro: 'Não foi possivel realizar operação',
            });
        });
};

exports.postAlunos = (req, res) => {
    Aluno.create({
        matricula: 362964,
        nome: 'Grimberg',
    })
        .then((aluno) => {
            res.status(200).send(aluno);
        })
        .catch((err) => {
            console.log(err);
            res.status(403).send({
                erro: 'Não foi possivel realizar operação',
            });
        });
};
