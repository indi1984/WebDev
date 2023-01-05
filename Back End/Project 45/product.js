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
  size: {
    type: String,
    enum: ['S', 'M', 'L'],
  },
});

// productSchema.methods.greet = function() {
//   console.log('HELLOW HI HOWDY!');
//   console.log(`- from ${this.name}`);
// };

productSchema.methods.toggleOnSale = function() {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function(newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function() {
  return this.updateMany({}, {onSale: true, price: 0});
};

const Product = mongoose.model('Product', productSchema);

// const findProduct = async () => {
//   const foundProduct = await Product.findOne({name: 'Bike Helmet'});
//   console.log(foundProduct);
//   await foundProduct.toggleOnSale();
//   console.log(foundProduct);
//   await foundProduct.addCategory('Outdoors');
//   console.log(foundProduct);
// };

// findProduct();

Product.fireSale().then((res) => console.log(res));

// ? Add New:

// const bike = new Product({name: 'Cycling Jersey', price: 29.50, categories: ['Cycling'], size: 'XS'});
// bike.save()
//     .then((data) => {
//       console.log('IT WORKED!');
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log('OH NO ERROR');
//       console.log(err);
//     });

// ? Update Existing:

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -19.99}, {new: true, runValidators: true})
//     .then((data) => {
//       console.log('IT WORKED!');
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log('OH NO ERROR');
//       console.log(err);
//     });
