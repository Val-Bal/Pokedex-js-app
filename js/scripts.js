// created new variable pokemonRepository to hold the pokemonList array and wrapped it in an IIFE  to avoid accessing the global state 
let pokemonRepository = (function () {
    let pokemonList = [];

    return {
        getAll: function () {
            return pokemonList;
        },
        add: function (pokemon) {
            pokemonList.push(pokemon);
        }
    }
    pokemonRepository.add(
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
        }
    );
    console.log(pokemonRepository.getAll);
})();

/*
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
    }
);
*/

// create for loop to list all the Pokemon in the array and write on the DOM with ForEach
pokemonList.forEach(function (pokemon) {
    document.write("<p>" + pokemon.name + " (height: " + pokemon.height + "m)");

    // add a conditional 
    if (pokemon.height > 0.7) {
        document.write(" - Wow, that’s big!" + "</p>");
    }
});


/*
1. In the “scripts.js” file of your project, wrap your pokemonList array in an IIFE to avoid accidentally accessing the global state.

2. Before anything else, create a new pokemonRepository variable to hold what your IIFE will return, then assign the IIFE to that variable.

3. The IIFE should return an object with the following public functions assigned as keys:
- getAll: return all items (pokemonRepository.getAll(); should return the pokemonList array)
- add: add a single item to the pokemonList array (calling pokemonRepository.add(item); should add the Pokémon referred to with item to the pokemonList array)

4. Make sure both functions are defined separately with the function keyword. Also, the IIFE returns only an object with the same names for keys as values (see the last paragraph of the Exercise)

5. Outside of and below the IIFE, you should already have a forEach() loop that iterates over each Pokémon in the repository. 
But since you’ve limited access to the pokemonList array that’s inside the IIFE (so that it’s only accessible through one of the two functions returned by the IIFE), 
you need to update the loop code to cope with the new changes. 
Essentially, you need to use one of the two functions returned by the IIFE in order to retrieve the pokemonList array.
*/