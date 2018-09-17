export const question = {
	theme: 'Géographie',
	question: 'Quelle est la capitale de la France',
	correctAnswer: 'Paris',
	answers: ['Bayonne', 'Paris', 'Bordeaux', 'Londres'],
};
export const aCase = {
	couleur: 'Rouge',
	cheese: true,
};

export const players = [
	{ nickname: 'Marmotte', cheeseCount: 3 },
	{ nickname: 'Ratatas', cheeseCount: 0 },
	{ nickname: 'Alpaga', cheeseCount: 2 },
	{ nickname: 'Chacal', cheeseCount: 5 },
];

export function generateDummyGames(nbParties) {
	let rejoindre = [];
	for (let i = 0; i < Math.random() * 10; i++) {
		let id = Math.ceil(Math.random() * 10000);
		let game = generateDummyPlayers();
		rejoindre.push({
			id: id,
			connectedPlayers: game.connectedPlayers,
			maxPlayers: game.maxPlayers,
		});
	}

	return rejoindre;
}

function generateDummyPlayers() {
	let maxPlayers = Math.floor(Math.random() * (10 - 2)) + 2;
	let connectedPlayers = Math.floor(Math.random() * (maxPlayers - 1 - 0)) + 0;
	return { connectedPlayers, maxPlayers };
}
