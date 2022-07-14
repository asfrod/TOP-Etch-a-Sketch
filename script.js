//Llamando mi div para crear el grid
const grids = document.querySelector(".grids");

//Creating a loop to iterate in a matrix 16*16
let i =1;
let j = 1;
for (i = 1; i<=16; i++) {
    const divI = document.createElement('div');
    divI.classList.add(`row${i}`, 'rows');
    grids.appendChild(divI);
    
    for (j = 1; j<=16; j++) {
        const divJ = document.createElement('div');
        divJ.classList.add(`${i},${j}`, 'grid');
        divI.appendChild(divJ);
    }
}

//Creating a hover event and adding a new class with another background color in css
const grid = Array.from(document.querySelectorAll('.grid'));
grid.forEach(g => g.addEventListener('mouseover', () => {
    g.classList.add('classic');
}));


//creating a click event to reset to the original class (and original color)
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    grid.forEach(g => g.classList.remove('classic'));
});




//Prompt to specify dimensions 
let a = 16;
const dim = document.querySelector('.dim');
dim.addEventListener('click', () => {
    a = prompt('Ingrese las dimensiones');
    console.log(a);
})




