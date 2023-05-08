const button = document.querySelector("#button");
const reset = document.querySelector("#reset");
let container = document.querySelector("#container");
let number = 0;

button.addEventListener ('click', function () {
    number = prompt("How big of a sketch do you want? The number will be squared.", 10);
    createRow(number);
    
})

reset.addEventListener ('click', function () {

    const child = container.querySelectorAll('.tile');
    for (let i = 0; i <= child.length; i++) {
        child[i].style.backgroundColor = 'white';
    }

    
})

container.addEventListener ('mouseover', function (e) {
    e.target.style.backgroundColor = 'black';
});




function createRow(width) {

    let number = width;


    for (let i = 1; i <= number; i++) {
        let row = document.createElement('div');
        row.classList.toggle("row");
        for (let j = 1; j <= number; j++) {
            let tile = document.createElement('div');
            tile.classList.toggle("tile");
            row.appendChild(tile);
        };
        container.appendChild(row);
    };


}

