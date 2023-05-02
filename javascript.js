function createRow(rowNum) {
  const container = document.querySelector(".rows");
  const newRow = document.createElement("div");
  newRow.classList.add(`row-${rowNum}`);
  newRow.classList.add('row');
  container.appendChild(newRow);
  return newRow;
}

function createCols(currentRow) {
  const newCol = document.createElement('div');
  newCol.classList.add("column");
  currentRow.appendChild(newCol);
}

function drawGrid(rows, cols) {
  for (let j = 0; j < rows; j++) {
    let currentRow = createRow(j);
    for (let i = 0; i < cols; i++) {
      createCols(currentRow);
    }
  }
}

function colorSquare() {
  if (window.colorMode === false) { 
    this.style.backgroundColor = 'black';
  } else {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log(r);
    this.style.backgroundColor = `rgb(${r},${g},${b})`;
  };
}

function deleteDisplay() {
  let rows = document.querySelectorAll(".row");
  rows.forEach(row => row.remove()); 
}

function promptDisplaySize() {
  let displaySize = 0;
  while (displaySize < 4 || displaySize > 100){
    displaySize = prompt("Enter the display resolution value. From 4 to 100");
  }
  deleteDisplay();

  let rows = displaySize / 2.5; 
  let cols = displaySize - rows;
  drawGrid(rows, cols);
  addDisplayListener();
}

function addDisplayListener() {
  const squares = document.querySelectorAll(".column");
  squares.forEach(square => square.addEventListener("mousemove", colorSquare));
}

function main() {

  window.colorMode = false;
  const rows = 30;
  const cols = 50;

  drawGrid(rows, cols);

  const displayButton = document.querySelector("#left-control");
  displayButton.addEventListener("click", promptDisplaySize);

  const colorButton = document.querySelector("#right-control");
  colorButton.addEventListener("click", () => {
    if (window.colorMode) window.colorMode = false;
    else window.colorMode = true;
  });

  addDisplayListener();
}

main();
