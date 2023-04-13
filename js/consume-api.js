const consumeApi = {};

consumeApi.getPokemons = (urlPoke) =>{
    return fetch(urlPoke)
    .then((response) => response.json())
    .then((jsonBody) =>  jsonBody)
    .catch((Error) => console.log("Erro no consumo da API"))
}
