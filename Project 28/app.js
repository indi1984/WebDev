
/*//! Default peramiters:

//* One peramiter:
	function rollDie(numSides = 6) {
		return Math.floor(Math.random() * numSides) + 1;
	};

//* More than one permamiter.  Perams with no default must go first:
	function greet(person, msg = 'Hey there') {
		console.log(`${msg}, ${person}`);
	}

*///! END Default peramiters

function rollDie(numSides = 6) {
	return Math.floor(Math.random() * numSides) + 1;
};
