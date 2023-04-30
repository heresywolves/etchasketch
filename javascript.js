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
  this.classList.add("colored");
}

function main() {
  const rows = 50;
  const cols = 70;

  drawGrid(rows, cols);

  const squares = document.querySelectorAll(".column");
  squares.forEach(square => square.addEventListener("mousemove", colorSquare));
}

main();
