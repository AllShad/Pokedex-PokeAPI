const url = 'https://pokeapi.co/api/v2/pokemon';
const loading = document.getElementById('loading');
const section = document.querySelector('.screan');
const closeCard = document.querySelector('#close');
const loadingCard = document.querySelector('#loading-card');

async function getPokemon(urlPoke, repeat, endReapts){
    const response = await fetch([urlPoke]);
    const data = await response.json();

    const image = document.createElement('img');
    const h1 = document.createElement('h1')
    const div = document.createElement('div');

    image.src = data.sprites.front_default;
    h1.textContent = data.name.toUpperCase();

    div.appendChild(h1);
    div.appendChild(image);

    div.classList.add('picture');

    image.classList.add('pokemon-picture');
    image.classList.add(h1.textContent);

    h1.classList.add('pokemon-picture');
    h1.classList.add(h1.textContent);

    section.appendChild(div); 
    
    if(repeat == endReapts - 1){
        const pokemon = document.querySelector('.screan').children

        for(let poke of pokemon){
            poke.addEventListener('click', function(){
                fillInCard(poke.textContent);
            }) 
        }
    }
}

async function getPokemons(){
    const response = await fetch(url);
    const data = await response.json();

    loading.classList.add('hide')

    for(let i = 0; i < data.results.length; i++){
        getPokemon(data.results[i].url, i, data.results.length) 
    } 
    
}

async function fillInCard(name){
    const getPoke = url + '/' + name.toLowerCase();
    const response = await fetch(getPoke)
    const data = await response.json();
    
    makeCard();
    loadingCard.classList.add('hide')
    const pokeName = document.querySelector('#poke-name');
    const pokeImage = document.querySelector('#poke-image')
    const pokeDescription = document.querySelector('#poke-description')

    pokeName.textContent = data.name.toUpperCase();
    pokeImage.src = data.sprites.front_default;
    pokeDescription.textContent = data.moves[0].move.name;
    
}

const card = document.getElementById('card');

function makeCard(){
    card.classList.remove('hide');
}

function closeCardFunction(){
    card.classList.add('hide');
    console.log(card);
}

document.addEventListener('DOMContentLoaded', getPokemons);
closeCard.addEventListener('click', closeCardFunction)


