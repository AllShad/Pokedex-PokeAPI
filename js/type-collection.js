const url = 'https://pokeapi.co/api/v2/type';
const section = document.getElementById('content');

function getType(){
    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
        })
    })
}

function addOnScrean(data){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');

    div.classList.add('picture');
    img.classList.add('pokemon-picture');

    div.appendChild(h1);
    div.appendChild(img);

    section.appendChild(div);
}

console.log(teste);