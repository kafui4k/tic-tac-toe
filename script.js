const gameboard = document.getElementById('gameboard');
const gameCells = document.querySelectorAll('.cell');
const X_CELL = 'X';
const O_CELL = 'O';
let O_CellTurn;

gameCells.forEach(gameCell => {
    gameCell.addEventListener('click', handleCellClick, { once: true })
})

// hanlde Clicking on individual cells
function handleCellClick(e) {
    const currentCell = e.target;
    const currentCellClass = O_CellTurn ? O_CELL : X_CELL;

    placeMark(currentCell, currentCellClass); // place mark on GameBoard
    changeMark(); // change X_CELL || O_CELL
}

function placeMark(currentCell, currentCellClass) {
    currentCell.classList.add(currentCellClass);
}

function changeMark() {
    O_CellTurn = !O_CellTurn;
}