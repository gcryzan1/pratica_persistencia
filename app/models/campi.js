const mongoose = require('../../config/mongodb');

const campusSchema = mongoose.Schema({
    nome: String,
    cidade: String,
    cursos: [
        {
            nome: String,
            turno: String,
        },
    ],
});

const Campus = mongoose.model('Campus', campusSchema);

module.exports = Campus;
