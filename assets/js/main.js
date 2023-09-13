
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5
let offset = 0;



function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}" >
                <span class="Number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>               
            </li>

    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', (bu) => {
    offset += limit
    loadPokemonItens(offset, limit)
})







// pokeApi.getPokemons().then ((pokemons = []) => {
//         pokemonList.innerHTML += pokemons.map (convertPokemonToLi).join('')
// })
//         // const newList = pokemons.map (convertPokemonToLi).join('')
//         // // (pokemon) => convertPokemonToLi(pokemon)
//         // const newHtml = newList

        
        
//         // const listItems = []

//         // for (let i = 0; i < pokemons.length; i++) {
//         //     const pokemon = pokemons[i];            
//         //     listItems.push(convertPokemonToLi(pokemon))
            
//         // }
//         // console.log(listItems)
    
        
    
   

