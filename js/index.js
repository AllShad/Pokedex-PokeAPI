const url = 'https://pokeapi.co/api/v2/pokemon/';
const search = document.getElementById('poke-search-input');
const buttonSearch = document.getElementById('poke-search-button');

function getPokeByName(){
    console.log()
    if(!search.value){
        alert('Barra de pesquisa vazia!');
        return
    }

    const getPoke = url + search.value.toLowerCase();
    fetch(getPoke).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                createModal();
            })
        }else{
            throw new exeption("Pokemon não encontrado");
        }
    }).catch(function(e){
        alert("Erro, Pokemon não existe ou o nome está incorreto");
    })
}

function createModal(){
    const changeStyle = document.querySelector('#styleCSS');
    changeStyle.href = './css/search-page.css';
}

buttonSearch.addEventListener('click', getPokeByName);