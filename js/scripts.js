// created new variable pokemonRepository to hold the pokemonList array and wrapped it in an IIFE  to avoid accessing the global state 
let pokemonRepository = (function () {
    let pokemonList = [];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    };
    /* alternative, less neat way
        return {
            getAll: function () {
                return pokemonList;
            },
            add: function (pokemon) {
                pokemonList.push(pokemon);
            }
        };
        */
})();

// add Pokemon to array with add() 
pokemonRepository.add(
    {
        name: "Bulbasaur",
        height: 0.7,
        types: ['grass', 'poison']
    }
);

pokemonRepository.add(
    {
        name: "Charmander",
        height: 0.6,
        types: ['fire']
    }
);

pokemonRepository.add(
    {
        name: "Squirtle",
        height: 0.5,
        types: ['water']
    }
);

pokemonRepository.add(
    {
        name: "Pikachu",
        height: 0.4,
        types: ['electric']
    }
);

pokemonRepository.add(
    {
        name: "Dratini",
        height: 1.8,
        types: ['dragon']
    }
);

console.log(pokemonRepository.getAll());


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

//return pokemonList through pokemonRepository, don't forget the () to call function
pokemonRepository.getAll().forEach(function (pokemon) {
    document.write("<p>" + pokemon.name + " (height: " + pokemon.height + "m)");

    // add a conditional 
    if (pokemon.height > 0.7) {
        document.write(" - Wow, that’s big!" + "</p>");
    }
});


/* OLD! without pokemonRepository
// create for loop to list all the Pokemon in the array and write on the DOM with ForEach
pokemonList.forEach(function (pokemon) {
    document.write("<p>" + pokemon.name + " (height: " + pokemon.height + "m)");

    // add a conditional 
    if (pokemon.height > 0.7) {
        document.write(" - Wow, that’s big!" + "</p>");
    }
});
*/
