//todo ADD TO ONE EXAMPLE PAGE

/*//! setTimeout and setInterval and clearInterval functions:

	//* setTimeout (will wait until a specified time passes before calling funciton):
			console.log('HELLOO!...');
			setTimeout(() => {
				console.log('Are you still there?')
			}, 3000);
			console.log('GOODBYE!!');

	//* setInterval (will call function at set time interval:
			const id = setInterval(() => {
				console.log(Math.random())
			}, 2000);

	//* clearInterval (will stop what ever setInterval is running according to its id ("const id" above))
			clearInterval(x);
*///! END


//! filter method:

//? ARRAY FOR EXAMPLES BELOW:
const movies = [
	{
		title: 'Amadeus',
		score: 99,
		year: 1984,
	},
	{
		title: 'Sharknado',
		score: 35,
		year: 2013,
	},
	{
		title: '13 Going On 30',
		score: 70,
		year: 2004,
	},
	{
		title: 'Stand By Me',
		score: 85,
		year: 1986,
	},
	{
		title: 'Waterworld',
		score: 62,
		year: 1995,
	},
	{
		title: 'Jingle All The Way',
		score: 71,
		year: 1996,
	},
	{
		title: 'Parsite',
		score: 95,
		year: 2019,
	},
	{
		title: 'Notting Hill',
		score: 77,
		year: 1999,
	},
	{
		title: 'Alien',
		score: 90,
		year: 1979,
	},
]

/*
//* Filtered arrarys
const badMovies = movies.filter(m => m.score < 70);
const recentMovies = movies.filter(m => m.year > 2000);

//* Filtered AND mapped items (will put filtered items into a brand new array):
const goodMovies = movies.filter(m => m.score > 80);
const goodTitles = goodMovies.map(m => m.title)

//* OR TO DO IT ALL IN ONE EXPRESSION:
const newGoodTitles = movies.filter(m => m.score > 80).map(m => m.title);

//* OR SAME ABOVE BUT SOME WRITE TO CLEAN UP:
const newNewGoodTitles = movies
	.filter(m => m.score > 80)
	.map(m => m.title)

*///! END

//! Some and Every methods:

//? ARRAY FOR EXAMPLES BELOW
const exams = [80, 98, 92, 78, 77, 90, 89, 81, 77];

//* Every method:
exams.every(score => score >= 75);

//* Some method:
movies.some(movie => movie.year > 2015);


//! END

//! Reduce method:



//todo END
