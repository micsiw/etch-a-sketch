const gridSquare = document.querySelector('.grid-square');
const slider = document.querySelector('.slider');
const gridSizeInfo = document.querySelector('.grid-size-info');
const rainbowButton = document.querySelector('.button-rainbow');
const shadeButton = document.querySelector('.button-shade');
const eraseButton = document.querySelector('.button-erase');
const allButtons = document.querySelectorAll('.button');

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
        cell.addEventListener('mouseover', hoverDraw);
        cell.style.filter = 'brightness(100%)';
    });

}

function hoverDraw() {

    this.style.filter = 'brightness(100%)';
    this.style.backgroundColor = '#A0A0A0';

}

function hoverRainbow() {

    this.style.filter = 'brightness(100%)';

    function getColor() {
        return "hsla(" + ~~(360 * Math.random()) + "," +
                    "80%,"+
                    "65%,1)"
    }
    
    this.style.backgroundColor = getColor();

}

function hoverShade() {

    switch(this.style.filter) {
        case 'brightness(100%)':
            this.style.filter = 'brightness(90%)';
            break;
        case 'brightness(90%)':
            this.style.filter = 'brightness(80%)';
            break;
        case 'brightness(80%)':
            this.style.filter = 'brightness(70%)';
            break;  
        case 'brightness(70%)':
            this.style.filter = 'brightness(60%)';
            break;
        case 'brightness(60%)':
            this.style.filter = 'brightness(50%)';
            break;
        case 'brightness(50%)':
            this.style.filter = 'brightness(40%)';
            break;
        case 'brightness(40%)':
            this.style.filter = 'brightness(30%)';
            break;
        case 'brightness(30%)':
            this.style.filter = 'brightness(20%)';
            break;   
    }

}

function hoverErase() {

    this.style.filter = 'brightness(100%)';
    this.style.backgroundColor = 'white';

}
    
function resetGrid() {

    const cells = document.querySelectorAll('.cell');
    
    if (cells.length > 0) {

        for(i = 0; i < cells.length; i++){
            cells[i].parentNode.removeChild(cells[i]);
        }
    }

}

function removeListeners() {

    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', hoverDraw);
    });

    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', hoverRainbow);
    });

    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', hoverShade);
    });

    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', hoverErase);
    });

}

/* every button below manipulates with additional class to recognize actual mode and switch properly between each other */

rainbowButton.addEventListener('click', () => {

    const cells = document.querySelectorAll('.cell');

    if (rainbowButton.classList.contains('button-clicked')) {
        rainbowButton.classList.remove('button-clicked')
    } else {
        allButtons.forEach((button) => {
            button.classList.remove('button-clicked');
            rainbowButton.classList.add('button-clicked')
        });
    } 

    removeListeners();

    cells.forEach((cell) => {

        if (cell.classList.contains('reset') || cell.classList.contains('shade')) {
            cell.classList.remove('reset');
            cell.classList.remove('shade');
            cell.className += ' rainbow'; 
            /* added class rainbow to recognize if it's active, 
            and toggle it with the same button */
            cell.addEventListener('mouseover', hoverRainbow);
        } else if (cell.classList.contains('rainbow')) {
            cell.className = 'cell';
            cell.addEventListener('mouseover', hoverDraw);
        } else {
            cell.className += ' rainbow'; 
            cell.addEventListener('mouseover', hoverRainbow);
        }

    });

});

shadeButton.addEventListener('click', () => {

    const cells = document.querySelectorAll('.cell');

    if (shadeButton.classList.contains('button-clicked')) {
        shadeButton.classList.remove('button-clicked')
    } else {
        allButtons.forEach((button) => {
            button.classList.remove('button-clicked');
            shadeButton.classList.add('button-clicked')
        });
    }

    removeListeners();

    cells.forEach((cell) => {

        if (cell.classList.contains('reset') || cell.classList.contains('rainbow')) {
            cell.classList.remove('reset');
            cell.classList.remove('rainbow');
            cell.className += ' shade';
            /* added class shade to recognize if it's active, 
            and toggle it with the same button */
            cell.addEventListener('mouseover', hoverShade);
        } else if (cell.classList.contains('shade')) {
            cell.className = 'cell';
            cell.addEventListener('mouseover', hoverDraw);
        } else {
            cell.className += ' shade';
            cell.addEventListener('mouseover', hoverShade);
        }

    });

});

eraseButton.addEventListener('click', () => {

    const cells = document.querySelectorAll('.cell');

    if (eraseButton.classList.contains('button-clicked')) {
        eraseButton.classList.remove('button-clicked')
    } else {
        allButtons.forEach((button) => {
            button.classList.remove('button-clicked');
            eraseButton.classList.add('button-clicked')
        });
    }

    removeListeners();

    cells.forEach((cell) => {

        if (cell.classList.contains('shade') || cell.classList.contains('rainbow')) {
            cell.classList.remove('shade');
            cell.classList.remove('rainbow');
            cell.className += ' reset';
            /* added class reset to recognize if it's active, 
                and toggle it with the same button */
            cell.addEventListener('mouseover', hoverErase);
        } else if (cell.classList.contains('reset')) {
            cell.className = 'cell';
            cell.addEventListener('mouseover', hoverDraw);
        } else {
            cell.className += ' reset';
            cell.addEventListener('mouseover', hoverErase);
        }

    });

});


drawGrid(squaresPerSide);



