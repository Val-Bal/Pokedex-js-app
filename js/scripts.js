// created new variable pokemonRepository to hold the pokemonList array and wrapped it in an IIFE  to avoid accessing the global state 
let pokemonRepository = (function () {
    //create empty array and load data from api
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

    // show details of pokemon with modal
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showDetailsModal(pokemon);
        });
    }

    function showModal() {
        let modalContainer = document.querySelector("#modal-container");
        modalContainer.classList.add("is-visible");
    }

    function hideModal() {
        let modalContainer = document.querySelector("#modal-container");
        modalContainer.classList.remove("is-visible");
    }

    /*
        function showDetailsModal(pokemon) {
            let modalTitle = document.querySelector('.modal-title');
            let modalBody = document.querySelector('.modal-body');
    
            modalBody.innerHTML = '';
    
            let image = document.querySelector(pokemon.imageUrl);
            let height = document.querySelector(pokemon.height);
            let types = document.querySelector(pokemon.types);
    
            modalBody.append(image);
            modalBody.append(height);
            modalBody.append(types);
        }
    */

    function showDetailsModal(pokemon) {
        let modalTitle = document.querySelector(".modal-title");
        let modalBody = document.querySelector(".modal-body");

        modalBody.innerHTML = "";
        modalTitle.innerHTML = "";

        // create elements for pokemon name, img, height, and types
        let nameElement = document.createElement("h1");
        nameElement.innerText = pokemon.name;

        // create image element
        let imageElement = document.createElement("img");
        imageElement.className = "model-img";
        imageElement.setAttribute("src", pokemon.imageUrl);

        // create height element
        let heightElement = document.createElement("p");
        heightElement.innerText = Height: ${ pokemon.height };

        // append pokemon elements to modal
        modalTitle.append(nameElement);
        modalBody.append(imageElement);
        modalBody.append(heightElement);

        showModal();
    }


    // all functions which are returned
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetailsModal: showDetailsModal
    };
})();



//return pokemonList through pokemonRepository, don't forget the () to call function
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

console.log(pokemonRepository);


