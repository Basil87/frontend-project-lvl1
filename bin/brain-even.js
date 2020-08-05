import readlineSync from 'readline-sync';

const startEven = () => {
  const randomNumber = () => Math.floor(Math.random() * 100);
  let questionsCount = 2;
  const question = (name) => {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer:');
    let result = '';
    if (userAnswer !== 'yes' || userAnswer !== 'no') {
      result = 'Use only "yes" or "no" answers!';
    } else if (number % 2 === 0) {
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
    console.log(result);
    if (result === 'Correct!' && questionsCount > 0) {
      questionsCount -= 1;
      question(name);
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  };
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName} !`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  question(userName);
};

startEven();

export default startEven;
