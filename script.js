window.onload = function init() {
    makeGrid();
    addListner();
}

function makeGrid(size) {

    if (!size) {
        size = 16;
    }
    
    let cellSize = 600/size;

    let container = document.querySelector("#container");
    for(let row = 0; row < size; row++) {
        let rowCell = document.createElement("div");
        rowCell.classList.add('row');
        container.appendChild(rowCell);
    }
    
    let rowCell = document.querySelectorAll('div.row');
    rowCell.forEach(row => {
        for (let col = 0; col < size; col++) {
        let colCell = document.createElement("div");
        colCell.classList.add('col'); 
        colCell.style.height = `${cellSize}px`;
        colCell.style.width = `${cellSize}px`;
        row.appendChild(colCell);
        }
    });
}



function addListner() {
    const cell = document.querySelectorAll('.col');
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', changeColor);
    })
};

function changeColor() {
    this.classList.add('cellHover');
};



function removeOldGrid() {
        const cell = document.getElementById('container');
        cell.innerHTML = '';
};

function clearGrid() {
    removeOldGrid();
    var size = prompt("Please enter the total grid size, example 16, 32, 64");
    if(size >=100) {
        alert("Submissions over 100 can make your computer laggy, we suggest going down to 64");
        size = prompt("Please enter the total grid size, example 16, 32, 64");
    } else if(isNaN(size)) {
        alert("Submissions must be a number, please try again.");
        size = prompt("Please enter the total grid size, example 16, 32, 64");
    }
   makeGrid(size);
   addListner();
}

document.getElementById("reset").addEventListener("click", clearGrid);
