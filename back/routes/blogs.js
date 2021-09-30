var express = require('express');
var router = express.Router();
var blogsController = require('../controllers/blogsController');
module.exports = (upload) => {

router.get('/', blogsController.getAll);
router.get('/:id', blogsController.get);
router.post('/', upload.single('image'), blogsController.post);
router.put('/:id',  upload.single('image'),blogsController.put);
router.delete('/:id', blogsController.delete);

return router;
}