//? ARRAY FOR EXAMPLES:
const movies = [
	{
		title: 'Amadeus',
		score: 99
	},
	{
		title: 'Stand By Me',
		score: 85
	},
	{
		title: 'Parsite',
		score: 95,
	},
	{
		title: 'Alien',
		score: 90,
	},
]


//todo ADD TO ONE EXAMPLE FILE:

/* //! .forEach method:
//* For Each function:
movies.forEach(function (movie) {
	console.log(`${movie.title} - ${movie.score}/100`);
});
*/

/* //! .map method using Arrow Functions:
//* (All on one line) Long Form:
const newMovies = movies.map(function (movie) { return `${movie.title} - ${movie.score / 10}/10` });

//* (All on one line) Arrow Function when doing more than one thing:
const newMovies = movies.map(movie => { return `${movie.title} - ${movie.score / 10}/10` });

//* (All on one line) Arrow Furnction when doing only one thing:
const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}/10`);

//* (Normal way to write on more than one line) Long Form:
const newMovies = movies.map(function (movie) {
	return `${movie.title} - ${movie.score / 10}/10`
});

//* (Normal way to write on more than one line) Arrow Function when doing more than one thing:
const newMovies = movies.map(movie => {
	return `${movie.title} - ${movie.score / 10}/10`
});

//* (Normal way to write on more than one line) Arrow Function when doing only one thing:
const newMovies = movies.map(movie => (
	`${movie.title} - ${movie.score / 10}/10`
));

//* (Normal way to write on more than one line) Arrow Function when doing only one thing:
const newMovies = movies.map(movie => (
	`${movie.title} - ${movie.score / 10}/10`
));
*/ //! END

//todo END
const newMovies = movies.map(movie => (
	`${ movie.title } - ${ movie.score / 10 } / 10`
));
