let pokemonList = [];

pokemonList.push(
    {
        name: "Bulbasaur",
        height: 0.7,
        types: ['grass', 'poison']
    },
    {
        name: "Charmander",
        height: 0.6,
        types: ['fire']
    },
    {
        name: "Squirtle",
        height: 0.5,
        types: ['water']
    },
    {
        name: "Pikachu",
        height: 0.4,
        types: ['electric']
    },
    {
        name: "Dratini",
        height: 1.8,
        types: ['dragon']
    },
);

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) ");
}