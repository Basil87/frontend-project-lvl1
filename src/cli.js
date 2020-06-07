import readlineSync from 'readline-sync';

const startGame = () => {
    console.log('Welcome to the Brain Games!');
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}

export default startGame;