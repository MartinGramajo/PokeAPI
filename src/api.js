
//consumo de api
export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch (error) {
        
    }
};


// para listar y traer limitado el numero de pokemon de la api
export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch (error) {
        
    }
};

//Para obtener datos especificos de un pokemon
export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch (error) {
        
    }
}