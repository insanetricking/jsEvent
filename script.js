'use strict'

let figure = document.querySelector('.figure');
let button = document.querySelector('#button');


button.addEventListener('click', () => {
    figure.classList.toggle('circle');
});
