export const getPokemons = (limit = 251, offset = 0) => {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset)
        .then(response => response.json());
};

export const getPokemon = (name = '') => {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + name)
        .then(response => response.json());
};

export const getItems = (limit = 120, offset = 0) => {
    return fetch('https://pokeapi.co/api/v2/item/?offset=' + offset + '&limit=' + limit)
        .then(response => response.json());
};

export const getItem = (name = '') => {
    return fetch('https://pokeapi.co/api/v2/item/' + name)
        .then(response => response.json());
};
