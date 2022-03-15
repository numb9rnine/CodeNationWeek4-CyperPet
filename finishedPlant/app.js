
//import inquirer to enable user input in terminal 
const inquirer = require('inquirer');
// import questions.js file 
const {questions} = require("./questions");


class Plant {
	_health;
	_hunger;
	_thirst;
	_boredom;
	_isAlive = true;
	_status;


	constructor(name) {
		this._name = name;
		this._health = 100;
		this._hunger = 0;
		this._thirst = 0;
		this._boredom = 0;
		this._status = 'Your plant is alive and well.';
	}

	get name() {
		return this._name;
	}
	get health() {
		return this._health;
	}
	get hunger() {
		return this._hunger;
	}
	get thirst() {
		return this._thirst;
	}
	get boredom() {
		return this._boredom;
	}
	get stats() {
		return console.table({
			name: this._name,
			health: this._health,
			hunger: this._hunger,
			thirst: this._thirst,
			boredom: this._boredom,
		});
	}
	get status() {
		return this._status;
	}

	set status(msg) {
		this._status = msg;
	}

	checkStats() {
		if (this._health <= 0) {
			this._isAlive = false;
			this.status = `${this.name} has died from malnutrition, please make sure your next plant has plenty to eat and drink.`;
		}
		if (this._boredom >= 50) {
			this._isAlive = false;
			this.status = `${this.name} has started wilt becasue it is bored.`;
		}
	}

	drinks() {
		this.thirst(-5);
		if (this.thirst < 0) this._thirst = 0;
		console.log(`Aaaaah, ${this.name} is feeling refreshed.`);
		return this.thirst;
	}

	async eats() {
		const { food } = await inquirer.prompt(questions.eat);

		if (food === 'sunlight') this.hunger(-10);
		if (food === 'pie') this.hunger(-5);
		if (food === 'ipa') this.hunger(10);

		return this._hunger;
	}

	hunger(num) {
		this._hunger += num;

		if (this._hunger < 0) this._hunger = 0;
		if (this._hunger > 25) this.health(-5);
		if (this._hunger > 40) {
			this.health(-5);
			this.boredom(5);
		}
		return this.checkStats();
	}

	thirst(num) {
		this._thirst += num;

		if (this._thirst < 0) this._thirst = 0;
		if (this._thirst > 25) this.health(-5);
		if (this._thirst > 40) {
			this.health(-5);
			this.boredom(5);
		}
		return this.checkStats();
	}

	health(num) {
		this._health += num;
		if (this._health < 0) this._health = 0;
	}

	boredom(num) {
		this._boredom += num;
		if (this._boredom < 0) this._boredom = 0;

		return this.checkStats();
	}
}

class Yucca extends Plant {
	constructor(name) {
		super(name);
	}

	async play() {
		const { play } = await inquirer.prompt(questions.YuccaPlay);

		if (play === 'PlayAcidJazz') this.boredom(-2);
		if (play === 'PlayCountryAndWestern') this.boredom(-5);
		if (play === 'PlayColdPlay') this.boredom(-10);
	}
}

class PalmTree extends Plant {
	constructor(name) {
		super(name);
	}

	async play() {
		const { play } = await inquirer.prompt(questions.palmTreePlay);

		if (play === 'PlaySeanPaul') this.boredom(-2);
		if (play === 'PlayClubtropicana') this.boredom(-5);
		if (play === 'PlayPinaColada') this.boredom(-10);
	}
}

let myPlant;

async function start() {
	const { typeOfPlant } = await inquirer.prompt(questions.typeOfPlant);

	const { plantName } = await inquirer.prompt({
		type: 'input',
		name: 'plantName',
		message: 'What is your plant called?',
	});

	if (typeOfPlant === 'yucca') myPlant = new Yucca(plantName);
	else if (typeOfPlant === 'palmtree') myPlant = new PalmTree(plantName);

	userChoice();
}

async function userChoice() {
	myPlant.boredom(5);
	myPlant.hunger(5);
	myPlant.thirst(5);
	myPlant.stats;

	if (!myPlant._isAlive) {
		gameOver();
		return;
	}

	const { choice } = await inquirer.prompt(questions.choice);

	if (choice === 'status') console.log(myPlant.status);
	if (choice === 'play') await myPlant.play();
	if (choice === 'feed') await myPlant.eats();
	if (choice === 'drink') await myPlant.drinks();
	if (choice === 'quit') {
		const quitChoice = await confirmQuit();
		if (quitChoice) return;
	}

	myPlant.checkStats();

	userChoice();
}

async function confirmQuit() {
	const { quitChoice } = await inquirer.prompt(questions.quitChoice);

	if (quitChoice === 'yes') return true;
	else return false;
}

async function gameOver() {
	console.log(myPlant.status);
	const { playAgain } = await inquirer.prompt(questions.playAgain);

	if (playAgain === 'yes') start();
	else return;
}

start();