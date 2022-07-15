//Initializing the function to create the grid when the webpage load
createGrid()

//Function to create a grid for the Etch a Sketch and his respective
//hover event 
function createGrid(dimen = 16) {
    //Selecting the section of the document (div element) in which create the EaS
    const grids = document.querySelector(".grids");

    //Creating a div element to contain the Etch a Sketch
    const etchSketch = document.createElement('div');
    etchSketch.classList.add('eAs');
    
    //Creating a loop to iterate in a matrix dimen * dimen
     for (let i = 1; i<=dimen; i++) {
        const divI = document.createElement('div');
        divI.classList.add(`row${i}`, 'rows');
        etchSketch.appendChild(divI);
        
        for (let j = 1; j<=dimen; j++) {
            const divJ = document.createElement('div');
            divJ.classList.add(`${i},${j}`, 'grid');
            divI.appendChild(divJ);
        }
    }
    grids.appendChild(etchSketch);

    //Creating a hover event and adding a new class with another background 
    //color in css
    const grid = Array.from(document.querySelectorAll('.grid'));
    grid.forEach(g => g.addEventListener('mouseover', () => {
        g.classList.add('classic');
    }));
    
    //creating a click event to reset to the original class (and original color)
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => {
        grid.forEach(g => g.classList.remove('classic'));
    });

}

//Prompt a specify dimension
const dim = document.querySelector('.dim');
dim.addEventListener('click', () => {
    let a = prompt('Ingrese las dimensiones');
    const eAs = document.querySelector('.eAs')
    eAs.remove();
    createGrid(a);
})
