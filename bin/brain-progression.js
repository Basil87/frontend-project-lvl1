#!/usr/bin/env node

import * as myModule from '../src/index.js';

const startProgression = () => {
  let counter = 2;
  const calculation = (name) => {
    let firstNumber = myModule.randomNumber();
    const choozenNumber = myModule.randomNumber(10);
    const progressionStep = myModule.randomNumber();
    const progressionLine = [firstNumber];
    for (let i = 0; i < 10; i += 1) {
      progressionLine.push(firstNumber + progressionStep);
      firstNumber += progressionStep;
    }
    const embossedNumber = progressionLine[choozenNumber];
    progressionLine[choozenNumber] = '..';
    console.log(`Question: ${progressionLine}`);
    const userAnswer = myModule.askSomething('Your answer:');
    const result = myModule.checkAnswer(embossedNumber, userAnswer);
    console.log(result);
    if (result === 'Correct!' && counter > 0) {
      counter -= 1;
      calculation(name);
    } else if (result === 'Correct!' && counter === 0) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  };
  console.log('Welcome to the Brain Games!');
  const userName = myModule.askSomething('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  console.log('What number is missing in the progression?');
  calculation(userName);
};

startProgression();

export default startProgression;
