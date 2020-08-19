import refs from './refs';
import card from '../template/card.hbs';
import { nextPage, page } from './nextPage.js';
import scroll from './scrol.js';

require('lodash');
const apiKey = `17932091-a96e694bd6f62b0fd0558b77b`;

refs.input.addEventListener('input', _.debounce(search, 500));

async function search() {
  let searchQuery = refs.input.value;
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
  const height = refs.ul.clientHeight;

  refs.searchBtn.classList.remove('isHiden');
  refs.searchBtn.addEventListener('click', nextPage);

  scroll(height);
  if (searchQuery) {
    const respPict = await fetch(url);
    const dataPars = await respPict.json();
    refs.ul.insertAdjacentHTML('beforeend', card(dataPars.hits));
  } else {
    refs.ul.innerHTML = '';
    refs.searchBtn.removeEventListener('click', nextPage);
    refs.searchBtn.classList.add('isHiden');
  }
}

export default search;
