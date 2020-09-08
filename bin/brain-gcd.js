#!/usr/bin/env node

import * as myModule from '../src/index.js';

const startGcd = () => {
  let questionsCount = 2;
  const calculation = (name) => {
    const firstNumber = myModule.randomNumber();
    const secondNumber = myModule.randomNumber();
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const rightResult = myModule.gcdMethod(firstNumber, secondNumber);
    const userAnswer = myModule.askSomething('Your answer:');
    const result = myModule.checkAnswer(rightResult, userAnswer);
    console.log(result);
    if (result === 'Correct!' && questionsCount > 0) {
      questionsCount -= 1;
      calculation(name);
    } else if (result === 'Correct!' && questionsCount === 0) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  };
  console.log('Welcome to the Brain Games!');
  const userName = myModule.askSomething('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  console.log('Find the greatest common divisor of given numbers.');
  calculation(userName);
};

startGcd();

export default startGcd;
