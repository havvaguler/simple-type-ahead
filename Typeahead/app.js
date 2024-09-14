const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchInput = document.querySelector('.search');
let cities = [];
let filteredCities = [];

fetch(endpoint)
    .then(res => res.json())
    .then((data) => {
        cities = data.map((obj) => {
            return {
                city: obj.city,
                state: obj.state,
                population: obj.population
            }
        });
    });

// Inputa girilen değeri işleyen function
function handleSearch(e) {
    const value = e.target.value.toLowerCase();
    findMatches(value);
    displayMatches();
}

// Girilen inputa göre filtreleme yapan function
function findMatches(value) {
    filteredCities = cities.filter(el => {
        return el.city.toLowerCase().includes(value) || el.state.toLowerCase().includes(value);
    });
}

// Filtrelenmiş özellikleri ekranda gösteren function
function displayMatches() {
    const UL = document.querySelector('.suggestions');
    UL.innerHTML = '';
    filteredCities.forEach((match) => {
        const newLI = document.createElement('li');
        newLI.innerText = `${match.city}, ${match.state} ${match.population}`;
        UL.appendChild(newLI);
    });
}

searchInput.addEventListener('input', handleSearch);
