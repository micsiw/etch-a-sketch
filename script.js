const gridSquare = document.querySelector('.grid-square');
const slider = document.querySelector('.slider');
const gridSizeInfo = document.querySelector('.grid-size-info');
const rainbowButton = document.querySelector('.button-rainbow');
const shadeButton = document.querySelector('.button-shade');
const eraseButton = document.querySelector('.button-erase');

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
        cell.addEventListener('mouseover', hoverBlack)
    });
}

function hoverBlack() {
    
    this.style.backgroundColor = '#696969'

}

function hoverRainbow() {

    function getColor() {
        return "hsla(" + ~~(360 * Math.random()) + "," +
                    "80%,"+
                    "55%,1)"
    }
    
    this.style.backgroundColor = getColor();

}

function resetGrid() {

    const cells = document.querySelectorAll('.cell');
    
    if (cells.length > 0) {

        for(var i = 0; i < cells.length; i++){
            cells[i].parentNode.removeChild(cells[i]);
        }
    }
}

rainbowButton.addEventListener('click', () => {

    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', hoverBlack)
    });

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', hoverRainbow)

    });
});

drawGrid(squaresPerSide);



