const btn = document.querySelector('#v2');

btn.onclick = function () {
	console.log('You clicked me!');
	console.log('I hope it works!');
}

function scream() {
	console.log('AHHHHHH');
	console.log('Stop touching me !');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
	alert('You clicked the H1!');
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function () {
	alert('CLICKED!');
})

function twist() {
	console.log('TWIST');
}

function shout() {
	console.log('SHOUT');
}

// const tasButton = document.querySelector('#tas');
const tasButton = document.querySelector("button[id='tas']");

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);




