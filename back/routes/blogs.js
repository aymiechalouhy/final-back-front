var express = require('express');
var router = express.Router();
var blogsController = require('../controllers/blogsController');
module.exports = (upload) => {

router.get('/blogs', blogsController.getAll);
router.get('/blogs/:id', blogsController.get);
router.post('/blogs', upload.single('image'), blogsController.post);
router.put('/blogs/:id',  upload.single('image'),blogsController.put);
router.delete('/blogs/:id', blogsController.delete);

router.post('/filtarion', blogsController.getFiltarion);

return router;
}