// created new variable pokemonRepository to hold the pokemonList array and wrapped it in an IIFE  to avoid accessing the global state 
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    /*
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
   */

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
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
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    return {
        getAll: getAll,
        add: add,
        //addListItem: addListItem,
        showDetails: showDetails
        loadList: loadList,
        loadDetails: loadDetails
    };
})();



/*
3. Add function(s) inside your data repository to load data from an external source.
- Add a LoadList() function as a return key that uses fetch to GET the complete list of Pokémon from here: https://pokeapi.co/api/v2/pokemon/
- Use the add() function to add each Pokémon from the results to your pokemonList variable. 
Make sure to set name and detailsUrl as the keys. Use this as a reference to see what the API response looks like.
- Add a loadDetails() function, as well. The loadDetails() function should expect a parameter with a Pokémon object as a parameter. 
loadDetails() should GET the Pokémon details using the URL from the Pokémon object in the parameter.
- Once the GET request is complete, use then to return a JSON response.
- then, assign some of the details you got from the response to the Pokémon in the pokemonList. Assign at least imgUrl and height.
- Make sure both functions LoadList() and loadDetails() are assigned to keys with the same name in the returned object of your pokemonRepository.

4. Make sure the Pokémon list is only rendered after you’ve gotten all information from the server.
- Call the LoadList() function of pokemonRepository.
- Then, execute getAll from the pokemonRepository.

5. forEach Pokémon, call the addListItem() function you wrote in the previous Exercise.

6. Edit your showDetails() function to load the Pokémon details from the API instead of loading static data:
- Inside the showDetails() function, call the loadDetails() function from above. Pass as parameter the Pokémon object.
- Log the result in the console (you’ll display it in the interface in the next Exercise).
- Make sure both functions LoadList() and loadDetails() are assigned to keys with the same name in the returned object of your pokemonRepository.

7. You should now see a list displaying all Pokémon. When you click one, it might take a short moment to load before you see a console.log() with the returned Pokémon object.
Commit the changes in Git and submit the link to your GitHub repository here. Feel free to share additional thoughts or ask questions on your submission page.
*/



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