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

exports.getByMatricula = (req, res) => {
    const { matricula } = req.params;
    Aluno.find({ matricula: matricula })
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

exports.deleteByMatricula = (req, res) => {
    const { matricula } = req.params;
    Aluno.findOneAndDelete({ matricula: matricula })
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
    const alunoObject = req.body;
    Aluno.create(alunoObject)
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
