function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
} 

function gridCreate(size){
    const screen = document.querySelector('.sketchScreen');
    screen.innerHTML = '';
    // set number of cells per row and column
    screen.style.flexWrap = 'wrap';
    screen.style.width = "100%";
    screen.style.height = "100%";
    screen.style.display = "flex";
    screen.style.alignItems = "flex-start";
        
    const cellSize = (100/size) + '%';
    //cell creation
    for(let i = 0; i < size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add("row");
        cell.style.flex = `0 0 ${cellSize}`;
        cell.style.height = cellSize;
        cell.style.border = '1px solid black';
        cell.style.backgroundColor = 'white';
        cell.style.boxSizing = 'border-box';
        cell.addEventListener('mouseenter', function () {
            cell.style.backgroundColor = getRandomColor();
        });
        screen.appendChild(cell);
    }
}
function sizeSelect(){
    const size = document.getElementById('gridSize').value;
    document.getElementById('sliderValue').textContent = size;
    gridCreate(size);
}

//Initialize grid
document.getElementById('gridSize').addEventListener('input',sizeSelect);
sizeSelect(); //initial grid creation