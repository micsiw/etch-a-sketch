const gridSquare = document.querySelector('.grid-square');
const slider = document.querySelector('.slider');
const gridSizeInfo = document.querySelector('.grid-size-info');

let squaresPerSide = slider.value;

slider.oninput = function() {
    resetGrid();
    squaresPerSide = slider.value;
    drawGrid(squaresPerSide);
}

function drawGrid(squaresPerSide) {

    for (c = 0; c < Math.pow(squaresPerSide, 2); c++) {
        let cell = document.createElement('div');
        gridSquare.appendChild(cell).className = 'cell';
    }

    gridSquare.style.gridTemplateColumns = "repeat(" + squaresPerSide + ", auto)";
    gridSizeInfo.innerHTML = squaresPerSide + " x " + squaresPerSide;

    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black'
        });
    });
}

function resetGrid() {
    const cells = document.querySelectorAll('.cell');
    
    if (cells.length > 0) {

        for(var i = 0; i < cells.length; i++){
            cells[i].parentNode.removeChild(cells[i]);
        }
    }
}

drawGrid(squaresPerSide);



