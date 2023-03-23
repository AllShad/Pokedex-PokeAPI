const url = 'https://pokeapi.co/api/v2/pokemon';
const loading = document.getElementById('loading');
const body = document.querySelector('body');

async function getPokemon(urlPoke){
    const response = await fetch([urlPoke]);
    const data = await response.json();

    const image = document.createElement('img');
    const h1 = document.createElement('h1');

    image.src = data.sprites.front_default;
    h1.textContent = data.name.toUpperCase();

    body.appendChild(h1);
    body.appendChild(image);

    image.classList.add('pokemon-picture');
    image.classList.add(h1.textContent);

    h1.classList.add('pokemon-picture');
    h1.classList.add(h1.textContent);
}

async function getPokemons(){
    const response = await fetch(url);
    const data = await response.json();

    loading.classList.add('hide')

    for(i = 0; i < data.results.length; i++){
        getPokemon(data.results[i].url)    
    }  
}

document.addEventListener('DOMContentLoaded', getPokemons);