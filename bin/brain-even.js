#!/usr/bin/env node
import * as myModule from '../src/index';

const startEven = () => {
  let questionsCount = 2;
  const question = (name) => {
    const number = myModule.randomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = myModule.askSomething('Your answer:');
    const result = myModule.checkEven(number, userAnswer);
    console.log(result);
    if (result === 'Correct!' && questionsCount > 0) {
      questionsCount -= 1;
      question(name);
    } else if (result === 'Correct!' && questionsCount === 0) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  };
  console.log('Welcome to the Brain Games!');
  const userName = myModule.askSomething('May I have your name? ');
  console.log(`Hi ${userName} !`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  question(userName);
};

startEven();

export default startEven;
