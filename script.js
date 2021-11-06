const container = document.querySelector('.container');
const blocks = document.querySelectorAll('.block');
const newGrid = document.querySelector('.newGrid');
const reset = document.querySelector('.reset');
const toggleClick = document.querySelector('.toggleClick');
const toggleHover = document.querySelector('.toggleHover');

// Create a grid of square divs
function createGrid(numGrid, event) {
  for (let i = 0; i < numGrid; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
  }

  const rows = document.querySelectorAll('.row');

  rows.forEach((ro) => {
    for (let i = 0; i < numGrid; i++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.addEventListener(event, () => {
        block.style.backgroundColor = "black";
      });
      ro.appendChild(block);
    }
  });
}
createGrid(16, 'mouseover');

// Clear the current grid and get a new number of squares per side
function changeSquares() {
  let num = +prompt("Enter a number between 2-100");
  if (num > 100 || num < 2) {
    return;
  } else {
    container.innerHTML = "";
    createGrid(num, 'mouseover');
  }
}

function resetGrid() {
  container.innerHTML = "";
  createGrid(16, 'mouseover');
}

function changeEvent() {
  container.innerHTML = "";
  createGrid(16, 'click');
}

newGrid.addEventListener('click', changeSquares);
reset.addEventListener('click', resetGrid);
toggleClick.addEventListener('click', changeEvent);






