const readline = require('readline');

// Initialisiere das Spielbrett
const boardSize = 5;
const shipCount = 3;
let board = [];
for (let i = 0; i < boardSize; i++) {
    board.push(Array(boardSize).fill(' '));
}

// Platziere Schiffe zufällig auf dem Brett
let ships = [];
while (ships.length < shipCount) {
    let row = Math.floor(Math.random() * boardSize);
    let col = Math.floor(Math.random() * boardSize);
    if (!ships.some(ship => ship.row === row && ship.col === col)) {
        ships.push({ row, col });
        board[row][col] = 'S'; // Schiffe werden auf dem Brett als 'S' dargestellt
    }
}

// Verstecke die Schiffe
for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
        if (board[i][j] === 'S') {
            board[i][j] = ' ';
        }
    }
}

// Spielstatus
let attempts = 0;
let hits = 0;
const maxAttempts = boardSize * boardSize;

function printBoard() {
    console.log('  0 1 2 3 4');
    for (let i = 0; i < boardSize; i++) {
        let row = i + ' ';
        for (let j = 0; j < boardSize; j++) {
            row += board[i][j] + ' ';
        }
        console.log(row);
    }
}

function isGameOver() {
    return hits === shipCount || attempts >= maxAttempts;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion() {
    printBoard();
    rl.question('Geben Sie Ihre Koordinaten ein (z.B. 2,3): ', (input) => {
        const [row, col] = input.split(',').map(Number);
        if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
            attempts++;
            if (ships.some(ship => ship.row === row && ship.col === col)) {
                console.log('Treffer!');
                board[row][col] = 'X';
                hits++;
            } else {
                console.log('Daneben!');
                board[row][col] = 'O';
            }
        } else {
            console.log('Ungültige Eingabe, bitte versuchen Sie es erneut.');
        }

        if (isGameOver()) {
            printBoard();
            if (hits === shipCount) {
                console.log('Glückwunsch! Sie haben alle Schiffe versenkt!');
            } else {
                console.log('Spiel vorbei! Sie haben die maximale Anzahl an Versuchen erreicht.');
            }
            rl.close();
        } else {
            askQuestion();
        }
    });
}

console.log('Willkommen zu Schiffe versenken!');
askQuestion();
