// create an array 
let pokemonList = [];

// push objects with Pokemon details to the array
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

// create for loop to list all the Pokemon in the array and write on the DOM with ForEach
pokemonList.forEach(function (pokemon) {
    document.write("<p>" + pokemon.name + " (height: " + pokemon.height + "m)");

    // add a conditional 
    if (pokemon.height > 0.7) {
        document.write(" - Wow, that’s big!" + "</p>");
    }
});