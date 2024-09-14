const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


let a = [];
let b = [];


fetch(endpoint)
    .then(res => res.json())
    .then((data) => {
        a = data.map((obj) => {
            return {
                city: obj.city,
                state: obj.state,
                population: obj.population
            }
        })

    })


const searchInput = document.querySelector('.search')

searchInput.addEventListener('input', function (e) {
    const value = e.target.value.toLowerCase()
    b = a.filter(function (el) {
        return el.city.toLowerCase().includes(value) || el.state.toLowerCase().includes(value)
    })
    displayMatches();
})



function displayMatches() {
    const UL = document.querySelector('.suggestions')
    UL.innerHTML = '';
    b.forEach((match) => {
        const newLI = document.createElement('li');
        newLI.innerText = `${match.city}, ${match.state} ${match.population}`
        UL.appendChild(newLI);
    })
}
