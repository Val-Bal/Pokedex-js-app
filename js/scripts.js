// created new variable pokemonRepository to hold the pokemonList array and wrapped it in an IIFE  to avoid accessing the global state 
let pokemonRepository = (function () {
    let pokemonList = [];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", (Event) => showDetails(pokemon));
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
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



/*
As a final step, add an event listener to each newly created button for each Pokémon in the list. You’ll need it in a later task:

Create a new function either above or below addListItem() and call it showDetails(). The function should expect one parameter: pokemon. 
Inside the function, run a console.log() on the Pokémon object that’s passed as the parameter. You’ll do more than just log the data in a later task.

In your addListItem() function, add an event listener to the button you created. It should listen to a click. As for its event handler function, 
call the showDetails function there, passing the pokemon object as a parameter when a Pokémon is clicked. 
This parameter should be the same parameter as addListItem(). Note: You might have thought of this already, 
but you don’t need to select the button using querySelector() to add event listeners if you’ve already created the element using 
createElement() within your JavaScript. Simply add the event listener to the variable that’s been assigned with document.createElement('button').

TIP! Remember to use line breaks and comments to organize larger and more complex code files. This is true for all three of your files (HTML, CSS, and JavaScript).


*/





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
    pokemonRepository.addListItem(pokemon);
});

/* old way A1.5
//return pokemonList through pokemonRepository, don't forget the () to call function
pokemonRepository.getAll().forEach(function (pokemon) {
    document.write("<p>" + pokemon.name + " (height: " + pokemon.height + "m)");
*/
/*
    // add a conditional 
    if (pokemon.height > 0.7) {
        document.write(" - Wow, that’s big!" + "</p>");
    }

});
*/

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


/*
Bonus Task A1.5

Want even more practice? You may have noticed that the add() function lets you add anything to pokemonList within the repository. 
You can even add strings or numbers. That’s not good. 
In a real application, you’d want to make sure pokemonList can only be modified with the correct type of data. 
Inside the addv function, you can check if the typeof parameter is an object. 
In combination with a conditional, make sure you can only add the passed argument of the function to pokemonList if it’s an object.

In addition to the type, you can also validate whether all Object.keys() of the parameter are equal to the specific keys you expect.

If you’re feeling truly adventurous, you can take a look at how the filter() function works and 
create a whole new public function for pokemonRepository that allows you to find specific Pokémon only by name.
*/