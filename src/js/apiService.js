import refs from './refs';
import card from '../template/card.hbs';
// import { nextPage } from './nextPage.js';
import scroll from './scrol.js';

require('lodash');
const apiKey = `17932091-a96e694bd6f62b0fd0558b77b`;
let page = 1;
refs.input.addEventListener('input', _.debounce(search, 500));

async function search() {
  let searchQuery = refs.input.value;
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

  const height = refs.ul.clientHeight;

  refs.searchBtn.addEventListener('click', nextPage);

  if (searchQuery) {
    const respPict = await fetch(url);
    const dataPars = await respPict.json();
    scroll(height);
    if (dataPars.hits.length === 0) {
      addClass('isHiden');
      toShow('Not found');
    } else {
      refs.ul.insertAdjacentHTML('beforeend', card(dataPars.hits));
      refs.searchBtn.classList.remove('isHiden');
    }
  } else {
    page = 1;
    toShow('');
    refs.searchBtn.removeEventListener('click', nextPage);
    addClass('isHiden');
  }
}

function nextPage() {
  page += 1;

  refs.searchBtn.removeEventListener('click', nextPage);
  search();
}

function addClass(a) {
  refs.searchBtn.classList.add(a);
}

function toShow(a) {
  refs.ul.innerHTML = a;
}
