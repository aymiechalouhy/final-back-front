const { Schema, model } = require('mongoose');
const blogSchema = new Schema({
 
    phoneName: String,
    image: String,
    brand: String,
    memory: String,
    mainCam: String,
    selfie: String,
    sound: String,
    battery: String,
    price: String,
    quantity: String,
    _User: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
}, {
    collection: 'blogs'
});

const Blog = model('Blog', blogSchema);
module.exports = Blog;

