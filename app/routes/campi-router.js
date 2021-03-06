const express = require('express');

const campiController = require('../controllers/campiController');

const router = express.Router();

router.get('/', campiController.index);
router.post('/', campiController.postCampi);
router.get('/:codigo', campiController.getByCodigo);
router.delete('/:codigo', campiController.deleteByCodigo);

module.exports = (app) => app.use('/api/campi', router);
