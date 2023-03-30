const url = 'https://pokeapi.co/api/v2/pokemon/';
const search = document.getElementById('poke-search-input');
const buttonSearch = document.getElementById('poke-search-button');

function getPokeByName(){
    const getPoke = url + search.value;
    fetch(getPoke).then(function(response){
        response.json().then(function(data){
            console.log(data)

        }).catch(err => console.log('Erro na chamada'))
    })
}

buttonSearch.addEventListener('click', getPokeByName);


