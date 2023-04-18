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
    
    name.textContent = pokemon.name.toUpperCase();
    image.src = pokemon.sprites.front_default;

    infos[0].appendChild(name);
    infos[0].appendChild(image);

    const types = pokemon.types
    const typesList = document.createElement('ul');
    types.map((type) => {
        const li = document.createElement('li');
        const h1 = document.createElement('h1')
        h1.textContent = type.type.name;
        li.appendChild(h1);
        typesList.appendChild(li); 
    })
    infos[0].appendChild(typesList);    

    const atacks = pokemon.abilities;
    const atackList = document.createElement('ul')
    atacks.map((atack) => {
        const li = document.createElement('li');
        const h1 = document.createElement('h1')
        h1.textContent = atack.ability.name;
        li.appendChild(h1);
        atackList.appendChild(li); 
    })
    infos[1].appendChild(atackList)

    const status = pokemon.stats;
    const statusList = document.createElement('ul');
    status.map((status) => {
        const li = document.createElement('li');
        const h1 = document.createElement('h1')
        h1.textContent = status.stat.name;
        li.appendChild(h1);
        statusList.appendChild(li); 
    })    
    infos[2].appendChild(statusList);
}

buttonSearch.addEventListener('click', getPokeByName);
image.addEventListener('click', () => {
    changeStyle.href = './css/index.css';
    section.classList.add('hide');
    window.location.href = '../index.html'
})