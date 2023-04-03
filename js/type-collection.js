import { colorType } from './functions/functions.js'
const url = 'https://pokeapi.co/api/v2/type';
const section = document.getElementById('content');

function getType(){
    fetch(url).then(function(response){
        response.json().then(function(data){
            for(let i = 0; i < data.results.length; i++){
                addOnScrean(data,i);
            }
        }).catch(function(error){
            alert('Erro no servidor')
        })
    })
}

function addOnScrean(data, length){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');

    h1.textContent = data.results[length].name.toUpperCase()

    div.classList.add('picture');
    img.classList.add('pokemon-picture');

    div.appendChild(h1);
    div.appendChild(img);

    div.classList.add('picture')

    colorType(data.results[length].name, div);

    section.appendChild(div);

    if(length == data.results.length - 1){
        getTypeOnScrean();
    }
}

function getTypeOnScrean(){
    const div = document.querySelectorAll('.picture')
    for(let type of div){
        type.addEventListener('click', () => {
            localStorage.setItem('type', type.firstElementChild.textContent);
            window.location.href = '../pages/poke-type-collection.html'
        })
    }
}

document.addEventListener('DOMContentLoaded', getType);
