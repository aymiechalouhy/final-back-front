var express = require('express');
var router = express.Router();
var ratesController = require('../controllers/ratesController');

router.get('/', ratesController.getAll);
router.get('/:id', ratesController.get);
router.post('/', ratesController.post);
router.put('/:id', ratesController.put);
router.delete('/:id', ratesController.delete);

module.exports = router;