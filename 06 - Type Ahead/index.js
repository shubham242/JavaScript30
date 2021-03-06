const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities=[];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function find(word, cities){
  return cities.filter(place => {
    const regex = new RegExp(word,'gi');
    return place.city.match(regex)||place.state.match(regex);
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function display(){
  const array = find(this.value,cities);
  const html = array.map(place =>{
    const regec = new RegExp(this.value,'gi');
    const cityName = place.city.replace(regec,`<span class='hl'>${this.value}</span>`);
    const stateName = place.state.replace(regec,`<span class='hl'>${this.value}</span>`);
    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>`;
  }).join('');
  suggest.innerHTML = html;
}

const search = document.querySelector('.search');
const suggest = document.querySelector('.suggestions');

search.addEventListener('change',display);
search.addEventListener('keyup',display);
