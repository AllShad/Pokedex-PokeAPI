import { colorType } from './functions/functions.js'

const type = localStorage.getItem('type');
const url = 'https://pokeapi.co/api/v2/type/';
const content = document.querySelector('#content')

function getPokeByType(){
    const urlGet = url + type.toLowerCase();

    fetch(urlGet).then(function(response){
        response.json().then(function(data){
            for(let i = 0; i < data.pokemon.length; i++){
                addOnScrean(data, i)
            }
        }).catch(function(erro){
            alert('Erro no servidor')
        })
    })
}

function addOnScrean(data, i){
    const div = document.createElement('div');
    const p = document.createElement('p');

    colorType(type.toLowerCase(), div)

    p.textContent = data.pokemon[i].pokemon.name.toUpperCase();

    div.classList.add('picture')
    div.appendChild(p)
    content.appendChild(div);
}

getPokeByType()