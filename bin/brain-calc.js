#!/usr/bin/env node

import * as myModule from '../src/index.js';

const startCalc = () => {
  let questionsCount = 2;
  const calculation = (name) => {
    const firstNumber = myModule.randomNumber();
    const secondNumber = myModule.randomNumber();
    const action = myModule.randomAction();
    console.log(`Question: ${firstNumber} ${action} ${secondNumber}`);
    const rightResult = myModule.calculationMethod(firstNumber, secondNumber, action);
    const userAnswer = myModule.askSomething('Your answer:');
    const result = myModule.checkCalc(rightResult, userAnswer);
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
  console.log('What is the result of the expression?');
  calculation(userName);
};

startCalc();

export default startCalc;
