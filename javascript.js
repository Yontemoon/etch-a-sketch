const button = document.querySelector("#button");
let grids = document.querySelector("#container");

let number = 0;

button.addEventListener ('click', function () {
    number = prompt("How big of a sketch do you want? The number will be squared.", 10);
    createRow(number);
    
})

function createRow(width) {
    let number = width;
    let fragment = document.createDocumentFragment();

    Array.from( {length : number}).forEach(element => {
        let row = document.createElement('div');
        row.classList.add("row");
        Array.from( {length : number}).forEach(element => {
            let tile = document.createElement('div');
            tile.classList.add("tile");
            row.appendChild(tile);
        });

        fragment.appendChild(row);

    });
grids.appendChild(fragment);
return;
}

