// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function printNum(element) {
// 	console.log(element);
// }

// numbers.forEach(printNum)


// numbers.forEach(function (el) {
// 	if(el % 2 === 0)
// 	console.log(el);
// })

// for (let el of numbers) {
// 	console.log(el);
// }

// const doubles = numbers.map(function (num) {
// 	return num * 2;
// });

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

//* For Each arrow function:
// movies.forEach(function (movie) {
// 	console.log(`${movie.title} - ${movie.score}/100`);
// });

//* (All on one line) Long Form:
// const newMovies = movies.map(function (movie) { return `${movie.title} - ${movie.score / 10}/10` });

//* (All on one line) Arrow Function when doing more than one thing:
// const newMovies = movies.map(movie => { return `${movie.title} - ${movie.score / 10}/10` });

//* (All on one line) Arrow Furnction when doing only one thing:
// const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}/10`);

//* (Normal way to write on more than one line) Long Form:
// const newMovies = movies.map(function (movie) {
// 	return `${movie.title} - ${movie.score / 10}/10`
// });

//* (Normal way to write on more than one line) Arrow Function when doing more than one thing:
// const newMovies = movies.map(movie => {
// 	return `${movie.title} - ${movie.score / 10}/10`
// });

//* (Normal way to write on more than one line) Arrow Function when doing only one thing:
// const newMovies = movies.map(movie => (
// 	`${movie.title} - ${movie.score / 10}/10`
// ));
