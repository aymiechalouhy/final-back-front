const Blog = require('../models/Blog');
class BlogsController {




    getAll(req, res, next) {
        Blog.find({}).populate('_User').exec((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }


    get(req, res, next) {
        let { id } = req.params;
        Blog.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    post(req, res, next) {
        let body = req.body;
        let image = [req.file.filename].toString();
        let blog = new Blog({...body, image});
        blog.save((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }


   async  put(req, res, next) {
        let { id } = req.params;

        if (req.file === undefined) {
            var image = null

        } else {
            var image = [req.file.filename].toString();

        }
        await Blog.findById(id, (err, response) => {
            if (err) return next(err);
            console.log("response", response);
            if (image === null) {
                image = response.image;
            }
        })
        let body = { ...req.body, image };
        await Blog.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response)
        });
    }







     

    delete(req, res, next) {
        let { id } = req.params;
        Blog.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

}
const blogsController = new BlogsController();
module.exports = blogsController;