
const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Plant } = require('../app');

class Yucca extends Plant {
  constructor(name) {
    super(name);
  }

  async play() {
    const { play } = await inquirer.prompt(questions.yuccaPlay);

    if (play === 'PlaySeanPaul') this.boredom(-2);
    if (play === 'PlayClubtropicana') this.boredom(-5);
    if (play === 'PlayPinaColada') this.boredom(-10);
  }
}

module.exports = {
  Yucca,
};