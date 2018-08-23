const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset-button');
const sizeField = document.querySelector('#grid-size-field');

let gridSize = 40;

resetButton.addEventListener('click', generate);

generate();

function generate () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    gridSize = sizeField.value;

    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            let div = document.createElement('div');

            div.style.backgroundColor = 'lightgray';
            div.style.margin = '0px';
            div.style.padding = '0px';
            div.style.display = 'float';
            div.style.setProperty('float', 'left');
            div.style.width = (100 / gridSize) + "%";
            div.style.height = (100 / gridSize) + "%";

            div.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'black';
            });

            container.appendChild(div);
        }
    }
}