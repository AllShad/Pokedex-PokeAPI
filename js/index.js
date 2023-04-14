const url = 'https://pokeapi.co/api/v2/pokemon/';
const search = document.getElementById('poke-search-input');
const buttonSearch = document.getElementById('poke-search-button');
const image = document.querySelector('.poke-logo-js');
const changeStyle = document.querySelector('#styleCSS');
const section = document.querySelector('#show-informations')

function getPokeByName(){
    console.log()
    if(!search.value){
        alert('Barra de pesquisa vazia!');
        return
    }

    const getPoke = url + search.value.toLowerCase();
    consume.getPokemon(getPoke).then((response) => {
        if(!response){
            alert('Nome do pokemon incorreto')
            return
        }else{
            consume.getPokemon(getPoke).then((pokemon) => createModal(pokemon))
        }
    })
}

function createModal(pokemon){
    changeStyle.href = './css/search-page.css';
    section.classList.remove('hide');
    addPart(pokemon);
}

function addPart(pokemon){
    const infos = document.querySelectorAll('.basic-info')

    const image = document.createElement('img');
    const name = document.createElement('h1');
    
    name.textContent = pokemon.name;
    image.src = pokemon.sprites.front_default;

    infos[0].appendChild(name);
    infos[0].appendChild(image);

    // const atacks = pokemon.
}

buttonSearch.addEventListener('click', getPokeByName);
image.addEventListener('click', () => {
    changeStyle.href = './css/index.css';
    section.classList.add('hide');
})