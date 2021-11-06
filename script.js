const container = document.querySelector('.container');

// Create multiple block containers
for(let i=0; i<16; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);
}

// Put blocks inside block containers
const rows = document.querySelectorAll('.row');

rows.forEach((ro) => {
  for(let i = 0; i < 16; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    ro.appendChild(block);
  }
});