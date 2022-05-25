const gridSquare = document.querySelector(".grid-square");

for (c = 0; c < 16*16; c++) {
    let cell = document.createElement('div');
    gridSquare.appendChild(cell).className = "cell";
}