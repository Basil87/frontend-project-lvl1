#!/usr/bin/env node

import * as myModule from '../src/index.js';

const startPrime = () => {
  let questionsCount = 2;
  const calculation = (name) => {
    const choosenNumber = myModule.randomNumber();
    const rightAnswer = myModule.isPrime(choosenNumber);
    console.log(`Question: ${choosenNumber}`);
    const userAnswer = myModule.askSomething('Your answer:');
    const result = () => {
      if (rightAnswer === userAnswer) {
        return 'Correct!';
      }

      return 'Wrong!';
    };
    console.log(result());
    if (result() === 'Correct!' && questionsCount > 0) {
      questionsCount -= 1;
      calculation(name);
    } else if (result() === 'Correct!' && questionsCount === 0) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  };
  console.log('Welcome to the Brain Games!');
  const userName = myModule.askSomething('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  calculation(userName);
};

startPrime();

export default startPrime;
