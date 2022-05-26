const gridSquare = document.querySelector('.grid-square');

for (c = 0; c < 30*30; c++) {
    let cell = document.createElement('div');
    gridSquare.appendChild(cell).className = 'cell';
}

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = 'black'
    });
});