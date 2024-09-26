const cardPokemon = document.querySelector('.card-pokemon')

const pokeImagem = document.getElementsByTagName('img');
const pokeNumber = document.getElementsByTagName('p');
const pokeName = document.getElementsByTagName('span');

const ApiPokemon = async (pokemon) => {
    const APIResposta =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResposta.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await ApiPokemon(pokemon);

    pokeImagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokeNumber.innerHTML = data.id;
    pokeName.innerHTML = data.name;

}

for(let i = 1; i <= 31; i++) {
    cardPokemon.innerHTML += renderPokemon(i);
}