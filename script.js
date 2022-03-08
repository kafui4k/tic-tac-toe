const gameboard = document.getElementById('gameboard');
const gameCells = document.querySelectorAll('.cell');
const gameboardMessage = document.getElementById('gameboard-message');
const gameboardMessageText = document.querySelector('[game-board-message-text]');
const playAgainButton = document.getElementById('play-again');
const X_CELL = 'X';
const O_CELL = 'O';
const WIN_OPTION_MATCHES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let O_CellTurn;

function startGame() {
    O_CellTurn = false;
    gameCells.forEach(gameCell => {
        gameCell.addEventListener('click', handleCellClick, { once: true })
    })
    gameboardMessage.classList.remove('show');
}

// hanlde Clicking on individual cells
function handleCellClick(e) {
    const currentCell = e.target;
    const currentCellClass = O_CellTurn ? O_CELL : X_CELL;

    placeMark(currentCell, currentCellClass); // place mark on GameBoard
    
    if (checkWin(currentCellClass)) {
        game(false);
    } else if (isDraw()) {
        game(true)
    } else {
        changeMark(); // change X_CELL || O_CELL
    }
}

function game(draw) {
    console.log(draw)
    if(draw) {
        console.log(gameboardMessageText.innerText = ' Game Draw!')
    } else {
        console.log(gameboardMessageText.innerText = `${O_CellTurn ? "O's" : "X's"} WINS!!!`);
    }
    gameboardMessage.classList.add('show');
}

function isDraw() {
    return [...gameCells].every(cell => {
        return cell.classList.contains(X_CELL) || cell.classList.contains(O_CELL)
    })
}

function placeMark(currentCell, currentCellClass) {
    currentCell.classList.add(currentCellClass);
}

function changeMark() {
    O_CellTurn = !O_CellTurn;
}

function checkWin(currentCellClass) {
    return WIN_OPTION_MATCHES.some(match => {
        return match.every(index => {
            return gameCells[index].classList.contains(currentCellClass)
        });
    });
}

startGame();