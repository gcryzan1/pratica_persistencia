const express = require('express');

const alunoController = require('../controllers/alunoController');

const router = express.Router();

router.get('/', alunoController.index);
router.post('/', alunoController.postAlunos);

module.exports = (app) => app.use('/api/alunos', router);
