function createGrid(size = 16){
    let container = document.querySelector('.grid-container');
    const height = container.clientHeight / size;

    
    for(let i = 0 ; i < size ; ++i){
        const containerRow = document.createElement('div');
        containerRow.classList.add('container-row')
        for(let j = 0 ; j < size ; ++j){
            const sketchSquare = document.createElement('div');
            sketchSquare.classList.add('sketch-square');
            
            sketchSquare.style.width = `${height}px`;
            sketchSquare.style.height = `${height}px`;

            containerRow.appendChild(sketchSquare);
        }
        container.appendChild(containerRow)
    }
}

function changeColor(e){
    const currColor = this.style.backgroundColor;

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style['background-color'] = '#' + randomColor;
    this.classList.add(`${randomColor}`);    
}

function setUpGrid(size = 16){
    createGrid(size);
    const squares = document.querySelectorAll('.sketch-square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', changeColor);
    });

}

function deleteGrid(){
    const grid = document.querySelector(".grid-container");
    grid.replaceChildren();
}

function resetGrid(size = 16){
    deleteGrid();
    setUpGrid(size);
}

function changeGridSize(){
    let size = prompt("Enter new size", "16");
    if(size === null){
        return;
    }
    if(!(size >= 1 && size <= 100)){
        alert(`Wrong input: ${size}`);
    }
    resetGrid(size);
}

setUpGrid(16)