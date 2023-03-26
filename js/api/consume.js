const url = 'https://pokeapi.co/api/v2/pokemon';
const loading = document.getElementById('loading');
const section = document.querySelector('.screan');
const closeCard = document.querySelector('#close');
const loadingCard = document.querySelector('#loading-card');
const cardSection = document.querySelector('#card > section')

function getPokemon(urlPoke, repeat, endReapts){
    fetch(urlPoke).then(function(response){
        response.json().then(function(data){
            showData(data, repeat, endReapts);
        })
    })

}

async function getPokemons(){
    fetch(url).then(function(response){
        response.json().then(function(data){
            loading.classList.add('hide')

            for(let i = 0; i < data.results.length; i++){
                getPokemon(data.results[i].url, i, data.results.length) 
            } 
        })
    })
}

function showData(data ,repeat, endReapts){
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
                getPokeFillCard(poke.textContent);
            }) 
        }
    }
}

function getPokeFillCard(name){
    const getPoke = url + '/' + name.toLowerCase();
    fetch(getPoke).then(function(response){
        response.json().then(function(data){
            fillInCard(data);
        })
    })
}

function fillInCard(data){
    makeCard();
    loadingCard.classList.add('hide')
    const pokeName = document.querySelector('#poke-name');
    const pokeImage = document.querySelector('#poke-image')
    const pokeDescription = document.querySelector('#poke-description')

    pokeName.textContent = data.name.toUpperCase();
    pokeImage.src = data.sprites.front_default;

    fillAtacks(data);
}

function fillAtacks(data){
    resetCard()
    for(let i = 0; i < 5; i++){
        const p = document.createElement('p');
        const div = document.querySelector('#basic-atacks');

        p.classList.add('atack');

        p.textContent = data.moves[i].move.name.toUpperCase();
        div.appendChild(p);
    }

    for(let a = 0; a < data.types.length; a++){
        const p = document.createElement('p');
        const div = document.querySelector('#types');
        
        p.classList.add('type');

        p.textContent = data.types[a].type.name.toUpperCase();
        div.appendChild(p);
    }
}

function resetCard(){
    const removeAtack = document.querySelectorAll('.atack');
    const removeType = document.querySelectorAll('.type');
    for(let leftAtack of removeAtack){
        leftAtack.remove();
    }

    for(let leftType of removeType){
        leftType.remove();
    }
}

const card = document.getElementById('card');

function makeCard(){
    card.classList.remove('hide');
    cardSection.classList.remove('hide');
    cardSection.classList.add('style');
}

function closeCardFunction(){
    card.classList.add('hide');
    cardSection.classList.add('hide');
    cardSection.classList.remove('style')
}

document.addEventListener('DOMContentLoaded', getPokemons);
closeCard.addEventListener('click', closeCardFunction);