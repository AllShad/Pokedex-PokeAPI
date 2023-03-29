const url = 'https://pokeapi.co/api/v2/pokemon';
const loading = document.getElementById('loading');
const section = document.querySelector('.screan');
const closeCard = document.querySelector('#close');
const loadingCard = document.querySelector('#loading-card');
const cardSection = document.querySelector('#card > section')

function getPokemon(urlPoke){
    fetch(urlPoke).then(function(response){
        response.json().then(function(data){
            showData(data);
        })
    })

}

function getPokeFillCard(name){
    const getPoke = url + '/' + name.toLowerCase();
    fetch(getPoke).then(function(response){
        response.json().then(function(data){
            fillInCard(data);
        })
    })
}

async function getPokemons(){
    loading.classList.add('hide')
    for(let i = 0; i < 20; i++){
        const getPokeRandom = url + '/' + Math.floor(Math.random() * 1000)
        getPokemon(getPokeRandom);
    }
}

function colorType(type, div){    
    switch(type){
        case 'normal':
            div.style.backgroundColor = '#B7B7A9'
            break;
        case 'fighting':
            div.style.backgroundColor = '#C56E60'
            break;
        case 'flying':
            div.style.backgroundColor = '#9AA9FF'
            break;
        case 'poison':
            div.style.backgroundColor = '#B76FA9'
            break;
        case 'ground':
            div.style.backgroundColor = '#E2C56F'
            break;
        case 'rock':
            div.style.backgroundColor = '#C5B77D'
            break;
        case 'bug':
            div.style.backgroundColor = '#B7C544'
            break;
        case 'ghost':
            div.style.backgroundColor = '#7D7DC5'
            break;
        case 'steel':
            div.style.backgroundColor = '#B7B7C5'
            break;
        case 'fire':
            div.style.backgroundColor = '#FF6144'
            break;
        case 'water':
            div.style.backgroundColor = '#52A9FF'
            break;
        case 'grass':
            div.style.backgroundColor = '#8CD46F'
            break;
        case 'electric':
            div.style.backgroundColor = '#FFD351'
            break;
        case 'psychic':
            div.style.backgroundColor = '#FF6FA9'
            break;
        case 'ice':
            div.style.backgroundColor = '#7CD3FF'
            break;
        case 'dragon':
            div.style.backgroundColor = '#8C7DF1'
            break;
        case 'dark':
            div.style.backgroundColor = '#8B6E60'
            break;
        case 'fairy':
            div.style.backgroundColor = '#F1A8F1'
            break;
        case 'unknown':
            div.style.backgroundColor = '#98C4B8'
            break;
        case 'shadow':
            div.style.backgroundColor = '#000000'
            break;
    }
}

function showData(data){
    const image = document.createElement('img');
    const h1 = document.createElement('h1')
    const div = document.createElement('div');

    image.src = data.sprites.front_default;
    h1.textContent = data.name.toUpperCase();
    const type = data.types[0].type.name;

    div.appendChild(h1);
    div.appendChild(image);

    div.classList.add('picture');
    div.classList.add(type)

    image.classList.add('pokemon-picture');
    image.classList.add(h1.textContent);

    h1.classList.add('pokemon-name');
    h1.classList.add(h1.textContent);

    section.appendChild(div); 

    colorType(type, div)
    
    const pokemon = document.querySelector('.screan').children

    for(let poke of pokemon){
        poke.addEventListener('click', function(){
            getPokeFillCard(poke.textContent);
        }) 
    }
}

function fillInCard(data){
    makeCard();
    loadingCard.classList.add('hide')
    const pokeName = document.querySelector('#poke-name');
    const pokeImage = document.querySelector('#poke-image')
    const pokeDescription = document.querySelector('#poke-description')

    pokeName.textContent = data.name.toUpperCase();
    pokeImage.src = data.sprites.front_default;

    const div = document.querySelector('#card');
    colorType(data.types[0].type.name, div)

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