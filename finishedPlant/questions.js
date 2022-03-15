// require used to link to external .js file 
const { Plant } = require('./app');

// questions and options for the game
const questions = {
    eat: {
      type: 'list',
      name: 'food',
      message: `What do you want to feed ${this.name}?`,
      choices: [
        {
          key: 'a',
          name: 'Sunlight: hunger -10',
          value: 'sunlight',
        },
        {
          key: 'b',
          name: 'Pie and Mash: hunger -5',
          value: 'pie',
        },
        {
          key: 'c',
          name: 'IPA: hunger +10',
          value: 'IPA',
        },
      ],
    },
  
    YuccaPlay: {
      type: 'list',
      name: 'play',
      message: 'Do you want to listen to?',
      choices: [
        {
          key: 'a',
          name: 'Acid Jazz: boredom -2',
          value: 'PlayAcidJazz',
        },
        {
          key: 'b',
          name: 'Country and Western: boredom -5',
          value: 'PlayCountryAndWestern',
        },
        {
          key: 'c',
          name: 'Coldplay: boredom -10',
          value: 'PlayColdPlay',
        },
      ],
    },
  
    palmTreePlay: {
      type: 'list',
      name: 'play',
      message: 'Do you want to listen to ?',
      choices: [
        {
          key: 'a',
          name: 'Sean Paul: boredom -2',
          value: 'PlaySeanPaul',
        },
        {
          key: 'b',
          name: 'Club tropicana: boredom -5',
          value: 'PlayClubtropicana',
        },
        {
          key: 'c',
          name: 'Play PinaColada: boredom -10',
          value: 'PlayPinaColada',
        },
      ],
    },
  
    typeOfPlant: {
      type: 'list',
      name: 'typeOfPlant',
      message:
        'What type of plant would you like? Please choose from the following options:',
      choices: [
        {
          key: 'a',
          name: 'Yucca',
          value: 'yucca',
        },
        {
          key: 'b',
          name: 'Palm Tree',
          value: 'palmtree',
        },
      ],
    },
  
    choice: {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        {
          key: 'a',
          name: 'Play it some music',
          value: 'play',
        },
        {
          key: 'b',
          name: 'Feed your plant',
          value: 'feed',
        },
        {
          key: 'c',
          name: 'Give your plant a drink',
          value: 'drink',
        },
        {
          key: 'd',
          name: "View your plant status",
          value: 'status',
        },
        {
          key: 'e',
          name: 'Quit the game',
          value: 'quit',
        },
      ],
    },
  
    quitChoice: {
      type: 'list',
      name: 'quitChoice',
      message:
        'Are you sure you want to quit? This will mean your plant will die :(',
      choices: [
        {
          key: 'a',
          name: "Yes, I'm sure.",
          value: 'yes',
        },
        {
          key: 'b',
          name: "No, I'll play some more.",
          value: 'no',
        },
      ],
    },
  
    playAgain: {
      type: 'list',
      name: 'playAgain',
      message: 'Would you like to play again?',
      choices: [
        {
          key: 'a',
          name: 'Yes',
          value: 'yes',
        },
        {
          key: 'b',
          name: 'No',
          value: 'no',
        },
      ],
    },
  };
  
  // Used to instruct node.js which sections of code to export from this file
  module.exports = {
    questions,
  };