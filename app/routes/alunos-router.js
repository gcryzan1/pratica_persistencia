const express = require('express');

const alunoController = require('../controllers/alunoController');

const router = express.Router();

router.get('/', alunoController.index);
router.post('/', alunoController.postAlunos);
router.get('/:matricula', alunoController.getByMatricula);
router.delete('/:matricula', alunoController.deleteByMatricula);
module.exports = (app) => app.use('/api/alunos', router);
