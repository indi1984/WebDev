const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const AppError = require('./AppError');
const methodOverride = require('method-override');


// ! MONGOOSE CONNECT:
mongoose.connect('mongodb://172.24.224.10:27017/farmStand2', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log('MONGO Connection OPEN!!');
    })
    .catch((err) => {
      console.log('MONGO CONNECTION ERROR!');
      console.log(err);
    });

// ! APP VARIABLES:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

// ! GET:
app.get('/', (req, res) => {
  res.redirect('/products');
});

app.get('/products', async (req, res, next) => {
  try {
    const {category} = req.query;
    if (category) {
      const products = await Product.find({category});
      res.render('products/index', {products, category});
    } else {
      const products = await Product.find({});
      res.render('products/index', {products, category: 'All'});
    }
  } catch (e) {
    next(e);
  }
});

// ! POST:
app.post('/products', async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  } catch (e) {
    next(e);
  }
});

// ! GET:
app.get('/products/new', (req, res) => {
  res.render('products/new', {categories});
});

app.get('/products/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError('Product Not Found', 404);
    }
    res.render('products/show', {product});
  } catch (e) {
    next(e);
  }
});

// ! PUT:
app.put('/products/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    console.log(res.body);
    res.redirect(`/products/${product._id}`);
  } catch (e) {
    next(e);
  }
});

// ! GET:
app.get('/products/:id/edit', async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError('Product Not Found', 404);
    }
    res.render('products/edit', {product, categories});
  } catch (e) {
    next(e);
  }
});

// ! DELETE:
app.delete('/products/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
  } catch (e) {
    next(e);
  }
});

// ! ERROR HANDLER:
app.use((err, req, res, next) => {
  const {status = 500, message = 'Something went wrong!'} = err;
  res.status(status).send(message);
});

// ! LISTEN:
app.listen(3000, () => {
  console.log('APP IS LISTENING ON PORT 3000!');
});
