const button = document.querySelector("#button");


let number = 0;

button.addEventListener ('click', function () {
    number = prompt("How big of a sketch do you want? The number will be squared.", 10);
    createRow(number);
    
})

container.addEventListener ('mouseover', function (e) {
    e.target.style.backgroundColor = 'black';
});

function createRow(width) {

    let number = width;
    // let fragment = document.createDocumentFragment();
    let container = document.querySelector("#container");
    for (let i = 1; i <= number; i++) {
        let row = document.createElement('div');
        row.classList.toggle("row");
        for (let j = 1; j <= number; j++) {
            let tile = document.createElement('div');
            tile.classList.toggle("tile");
            console.log(tile);
            // tile.setAttribute('id', "tileID");
            row.appendChild(tile);
        };
        container.appendChild(row);
    };
    // container.appendChild(fragment);

}

