// created new variable pokemonRepository to hold the pokemonList array and wrapped it in an IIFE  to avoid accessing the global state 
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        // optional enter validations
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
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

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                // optional, to log all pokemon to the console console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // following code adds the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

//return pokemonList through pokemonRepository, don't forget the () to call function
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});


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

/*
Bonus Task A1.7
Display a loading message while data is being loaded. To do this, implement a showLoadingMessage() and hideLoadingMessage() function, 
which appends/removes a message to your page. Hint #1: showLoadingMessage() should be the first thing executed inside both the LoadList() 
and loadDetails() functions. Hint #2: hideLoadingMessage() should be executed in the then and catch blocks of the fetch code of both 
LoadList() and loadDetails(). This makes sense because once you’re inside then or catch, it means you’ve received the response from 
the fetch code and can hide the loading message.
*/