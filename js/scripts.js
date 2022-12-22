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

// create for loop to list all the Pokemon in the array and write on the DOM
for (let i = 0; i < pokemonList.length; i++) {
    document.write("<li>");
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) ");
    // add a conditional 
    if (pokemonList[i].height > 0.7) {
        document.write(" - Wow, that’s big!");
    }
    document.write("</li>");
}