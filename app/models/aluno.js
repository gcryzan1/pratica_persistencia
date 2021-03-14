const mongoose = require('../../config/mongodb');

const alunoSchema = mongoose.Schema({
    matricula: Number,
    nome: String,
    dataNascimento: Date,
    telefone: {
        toperadora: String,
        ddd: Number,
        numero: Number,
    },
    curso: {
        nome: String,
        turno: String,
    },
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;
