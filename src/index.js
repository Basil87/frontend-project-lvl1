import readlineSync from 'readline-sync';

export const askSomething = (question) => readlineSync.question(question);

export const randomNumber = () => Math.floor(Math.random() * 10);

export const randomAction = () => {
  const number = Math.floor(Math.random() * 3);
  if (number === 1) {
    return '+';
  }
  if (number === 2) {
    return '-';
  }

  return '*';
};

export const calculationMethod = (a, b, action) => {
  if (action === '+') {
    return a + b;
  }

  if (action === '-') {
    return a - b;
  }

  return a * b;
};

export const checkEven = (number, userAnswer) => {
  let result = '';
  if (number % 2 === 0) {
    if (userAnswer === 'yes') {
      result = 'Correct!';
    } else {
      result = '"no" is wrong answer ;(. Correct answer was "yes".';
    }
  } else if (number % 2 !== 0) {
    if (userAnswer === 'no') {
      result = 'Correct!';
    } else {
      result = '"no" is wrong answer ;(. Correct answer was "yes".';
    }
  }
  return result;
};

export const checkCalc = (rightResult, result) => {
  if (rightResult === +result) {
    return 'Correct!';
  }

  return 'WRONG!!!';
};
