const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
	const pokemon = document.createElement('div');
	const label = document.createElement('span');
	const newImg = document.createElement('img');
	pokemon.classList.add('pokemon');
	pokemon.appendChild(newImg);
	pokemon.appendChild(label);
	label.innerText = `#${i}`;
	newImg.src = `${baseURL}${i}.png`;
	container.appendChild(pokemon);
};
