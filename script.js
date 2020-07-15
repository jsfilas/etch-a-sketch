
function makeGrid(size) {

    let cellSize = 500/size;

    const container = document.querySelector("#container");
    for(let row = 0; row < size; row++) {
        const rowCell = document.createElement("div");
        rowCell.classList.add('row');
        container.appendChild(rowCell);
    }
    
    const rowCell = document.querySelectorAll('div.row');
    rowCell.forEach(row => {

    
    for (let col = 0; col < size; col++) {
        const colCell = document.createElement("div");
        colCell.classList.add('col'); 
        colCell.style.height = `${cellSize}px`;
        colCell.style.width = `${cellSize}px`;
        row.appendChild(colCell);
    }
});
}

makeGrid(16);