const mongoose = require('../../config/mongodb');

const alunoSchema = mongoose.Schema({
    matricula: { type: Number, unique: true, require: true },
    nome: String,
    dataNascimento: Date,
    telefone: {
        operadora: String,
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
