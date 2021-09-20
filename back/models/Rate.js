const { Schema, model } = require('mongoose');
const rateSchema = new Schema({

   
    review: String,
    comment: String,
  
}, {
    collection: 'rates'
});

const Rate = model('rates', rateSchema);
module.exports = Rate;