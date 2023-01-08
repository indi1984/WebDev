// Declerations
const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

// Mongoose Conneciton Configuration
mongoose.connect('mongodb://localhost:27017/authDemo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected...');
});

// EJS Settings
app.set('view engine', 'ejs');
app.set('views', 'views');

// Express Session Configuration
const sessionConfig = {
  secret: 'notagoodsecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(express.urlencoded({extended: true}));

// Homepage Route
app.get('/', (req, res) => {
  res.send('This is the homepage.');
});

// Register Routes
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const {username, password} = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  req.session.user_id = user._id;
  res.redirect('/');
});

// Login Route
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username});
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    req.session.user_id = user._id;
    res.redirect('/secret');
  } else {
    res.redirect('/login');
  }
});

// Logout Route
app.post('/logout', async (req, res) => {
  // req.session.user_id = null;
  req.session.destroy();
  res.redirect('/login');
});

// Secret Route
app.get('/secret', (req, res) => {
  if (!req.session.user_id) {
    return res.redirect('/login');
  }
  res.render('secret');
});

// Mongoose Console Status
app.listen(3000, () => {
  console.log('MONGOOSE IS SERVING YOUR APP ON PORT 3000!');
});

