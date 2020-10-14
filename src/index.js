import readlineSync from 'readline-sync';

export const askSomething = (question) => readlineSync.question(question);

export const randomNumber = (count = 100) => Math.floor(Math.random() * count);

export const questionsCount = 2;

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

export const gcdMethod = (a, b) => {
  if (b > 0) {
    const k = a % b;
    return gcdMethod(b, k);
  }

  return Math.abs(a);
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

export const checkAnswer = (rightResult, result) => {
  if (rightResult === +result) {
    return 'Correct!';
  }

  return 'WRONG!!!';
};

export const isPrime = (number) => {
  let start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start < 1) return 'no';
    start += 1;
  }
  return 'yes';
};
