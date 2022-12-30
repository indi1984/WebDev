const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const AppError = require('./AppError');
const methodOverride = require('method-override');


mongoose.connect('mongodb://172.24.224.10:27017/farmStand2', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log('MONGO Connection OPEN!!');
    })
    .catch((err) => {
      console.log('MONGO CONNECTION ERROR!');
      console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

function wrapAsync(fn) {
  return function(req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
};

app.get('/', (req, res) => {
  res.redirect('/products');
});

app.get('/products', wrapAsync(async (req, res, next) => {
  const {category} = req.query;
  if (category) {
    const products = await Product.find({category});
    res.render('products/index', {products, category});
  } else {
    const products = await Product.find({});
    res.render('products/index', {products, category: 'All'});
  }
}));

app.post('/products', wrapAsync(async (req, res, next) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
}));

app.get('/products/new', (req, res) => {
  res.render('products/new', {categories});
});

app.get('/products/:id', wrapAsync(async (req, res, next) => {
  const {id} = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError('Product Not Found', 404);
  }
  res.render('products/show', {product});
}));

app.put('/products/:id', wrapAsync(async (req, res, next) => {
  const {id} = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
  console.log(res.body);
  res.redirect(`/products/${product._id}`);
}));

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
  const {id} = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError('Product Not Found', 404);
  }
  res.render('products/edit', {product, categories});
}));

app.delete('/products/:id', wrapAsync(async (req, res, next) => {
  const {id} = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/products');
}));

// ! ERROR HANDLERS ***********************************************
const handleValidationErr = (err) => {
  console.dir(err);
  return new AppError(`Validation Failed... ${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name = 'ValidationError') err = handleValidationErr(err);
  next(err);
});

app.use((err, req, res, next) => {
  const {status = 500, message = 'Something went wrong!'} = err;
  res.status(status).send(message);
});
// ! **************************************************************

app.listen(3000, () => {
  console.log('APP IS LISTENING ON PORT 3000!');
});
