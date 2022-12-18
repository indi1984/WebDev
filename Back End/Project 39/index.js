const express = require('express');
const app = express();

// app.use((req, res) => {
// console.log('WE GOT A NEW REQUEST!');
//  //res.send('HELLO WE GOT YOUR REQ, THIS IS RES!');
// res.send('<h1>This is my webpage!</h1>');
// });

app.get('/', (req, res) => {
  res.send('This is the home page.');
});

app.get('/r/:subreddit', (req, res) => {
  const {subreddit} = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit.</h1>`);
});

app.get('/r/:subreddit/:postID', (req, res) => {
  const {subreddit, postID} = req.params;
  res.send(`<h1>Viewing Post ID: ${postID} on the ${subreddit} subreddit.</h1>`);
});

app.post('/cats', (req, res) => {
  res.send('THIS IS A POST REQ TO cats.  THIS IS DIFFERENT THAN A GET REQUEST!');
});

app.get('/cats', (req, res) => {
  res.send('MEOW!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!');
});

app.get('/search', (req, res) => {
  const {q} = req.query;
  if (!q) {
    res.send('Nothing found if nothing searched.');
  }
  res.send(`Search results for: ${q}.`);
});

app.get('*', (req, res) => {
  res.send('I don\'t know the route to that path.');
});

app.listen(8080, () => {
  console.log('LISTENING ON PORT 8080!');
});
