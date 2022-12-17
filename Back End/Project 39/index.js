const express = require('express');
const app = express();

app.use((req, res) => {
	console.log('WE GOT A NEW REQUEST!');
	// res.send('HELLO WE GOT YOUR REQ, THIS IS RES!');
	res.send('<h1>This is my webpage!</h1>');
});

app.listen(8080, () => {
	console.log('LISTENING ON PORT 8080!');
});
