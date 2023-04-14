const consume = {};

consume.getPokemon = (url) => {
    return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon)
    .catch((Error) => {return false})
}