function createRow(rowNum) {
  const container = document.querySelector(".rows");
  const newRow = document.createElement("div");
  newRow.classList.add(`row-${rowNum}`);
  newRow.classList.add('row');
  container.appendChild(newRow);
  return newRow;
}

function createCols(currentRow) {
  const newRow = document.createElement('div');
  newRow.classList.add("column");
  currentRow.appendChild(newRow);
}

function drawGrid(rows, cols) {
  for (let j = 0; j < rows; j++) {
    let currentRow = createRow(j);
    for (let i = 0; i < cols; i++) {
      createCols(currentRow);
    }
  }
}

function main() {
  const rows = 16;
  const cols = 16;

  drawGrid(rows, cols);
  
}

main();
