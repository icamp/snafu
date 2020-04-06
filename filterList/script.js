
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// # 1. creating an empty array which will hold the cities
const cities = [];
// # 2. fetching the data from API, which will return a promise
fetch(endpoint)
   // one way to work with a promise is to call .then against it
  .then(blob => blob.json())  // .then returns raw data which we convert to json
   // blob.json returns another promise which we will call .then on to get the raw data
  .then(data => cities.push(...data)) // to get the raw data as an array in cities we use '...' (spread) 

// # 3. create a function to filter the array when something is typed in the search box
// the function will take in a word to match and the cities array
function findMatches(wordToMatch, cities) { 
  // from the function we return the cities array
  // and call filter on it to cisel it down into a subset of the initial array
  // and each one is going to have a place (which is each city or state or population etc)
  return cities.filter(place => {
  // check if the city or state matches what was searched
  const regex = new RegExp(wordToMatch, 'gi'); // 'gi' g-global, i-insensitive (to word case) 
  return place.city.match(regex) || place.state.match(regex)
  });
}

// # 4. // caching the search box and suggestions to variables
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// write the display function that will be called whenever the value in the search box is changed
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

// 
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

