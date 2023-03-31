export function colorType(type, div){    
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