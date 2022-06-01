let squaresPerSide = 64;

const gridSquare = document.querySelector('.grid-square');
gridSquare.style.gridTemplateColumns = "repeat(" + squaresPerSide + ", 1fr)"

for (c = 0; c < Math.pow(squaresPerSide, 2); c++) {
    let cell = document.createElement('div');
    gridSquare.appendChild(cell).className = 'cell';
}

const cells = document.querySelectorAll('.cell');

/*cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = 'black'
    });

});*/