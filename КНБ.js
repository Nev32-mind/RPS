const rock = document.getElementById('rock');
const skissors = document.getElementById('skissors');
const paper = document.getElementById('paper');
const restart = document.getElementById('restart');
const result = document.getElementById('result');
const cR = document.getElementById('cR');
const res = document.getElementById('res');

rock.addEventListener('click', () => Round('rock'));
skissors.addEventListener('click', () => Round('skissors'));
paper.addEventListener('click', () => Round('paper'));
restart.addEventListener('click', () => restartButton());

let comp = 0;
let player = 0;

let currentRound = 1;
const abc = 5;
const maxRound = 6;

function restartButton() {
    player = 0;
    comp = 0;
    currentRound = 1;
    res.textContent = '';
    result.textContent = 'Начните игру';
    cR.textContent = '';
}

let choices = ['rock', 'skissors', 'paper'];

function Round(playerChoice) {
    if(currentRound < abc) {
        cR.textContent = 'Раунд ' + currentRound + '/5';
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        if ((playerChoice == 'rock' && computerChoice == 'skissors') || 
            (playerChoice == 'skissors' && computerChoice == 'paper') || 
            (playerChoice == 'paper' && computerChoice == 'rock')) {
            player++;
            result.textContent = 'Игрок победил в ' + currentRound + ' раунде';
            console.log(playerChoice, computerChoice);
        }
        else if (playerChoice == computerChoice) {
            result.textContent = 'Ничья в ' + currentRound + ' раунде';
            console.log(playerChoice, computerChoice);
        }
        else {
            comp++;
            result.textContent = 'Компьютер победил в ' + currentRound + ' раунде';
            console.log(playerChoice, computerChoice);
        }
        currentRound++;
    }
    else if (currentRound == abc) {
        cR.textContent = 'Финальный раунд';
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        if ((playerChoice == 'rock' && computerChoice == 'skissors') || 
            (playerChoice == 'skissors' && computerChoice == 'paper') || 
            (playerChoice == 'paper' && computerChoice == 'rock')) {
            player++;
            result.textContent = 'Игрок победил в ' + currentRound + ' раунде';
        }
        else if (playerChoice == computerChoice) {
            result.textContent = 'Ничья в ' + currentRound + ' раунде';
        }
        else {
            comp++;
            result.textContent = 'Компьютер победил в ' + currentRound + ' раунде';
        }
        if (player > comp) {
            res.textContent = 'Игрок победил со счётом ' + player + '/' + comp;
        }
        else if (comp > player) {
            res.textContent = 'Компьютер победил со счётом ' + comp + '/' + player;
        }
        else {
            res.textContent = 'Ничья со счётом ' + player + '/' + comp;
        }
        currentRound++;
    }
    else {
        result.textContent = '';
    }
}



