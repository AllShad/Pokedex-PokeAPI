import { colorType } from './functions/functions.js'

const type = localStorage.getItem('type');
const url = 'https://pokeapi.co/api/v2/type/';
const content = document.querySelector('#content')

function getPokeByType(){
    const urlGet = url + type.toLowerCase();

    consumeApi.getPokemons(urlGet).then((pokemon) => {
        for(let i = 0; i < pokemon.pokemon.length; i++){
            addOnScrean(pokemon, i)
        }
    })
}

function getImages(data,i, name){
    const getImagesUrl = data.pokemon[i].pokemon.url;

    fetch(getImagesUrl).then(function(response){
        response.json().then(function(dataImages){
            addImage(dataImages.sprites.front_default, name);
        })
    })
}

function addImage(data, name){
    const image = document.createElement('img');
    image.src = data;

    const div = document.querySelector(`.${name}`);
    image.classList.add('poke-picture')
    console.log(div)
    div.appendChild(image);
    
}

function addOnScrean(data, i){
    const div = document.createElement('div');
    const p = document.createElement('p');

    colorType(type.toLowerCase(), div)

    p.textContent = data.pokemon[i].pokemon.name.toUpperCase();

    div.classList.add('picture');
    div.classList.add(data.pokemon[i].pokemon.name);
    div.appendChild(p);
    content.appendChild(div);
    
    getImages(data, i, data.pokemon[i].pokemon.name)
}

getPokeByType()