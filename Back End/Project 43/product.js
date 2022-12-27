const mongoose = require('mongoose');

mongoose.connect('mongodb://172.24.224.10:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log('Connection OPEN!!');
    })
    .catch((err) => {
      console.log('ERROR!');
      console.log(err);
    });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: {
    type: Number,
    min: 0,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});


const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Bike Helmet', price: 19.50, categories: ['Cycling', 'Safety']});
bike.save()
    .then((data) => {
      console.log('IT WORKED!');
      console.log(data);
    })
    .catch((err) => {
      console.log('OH NO ERROR');
      console.log(err);
    });

