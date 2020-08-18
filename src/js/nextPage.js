// import from ""
import refs from './refs.js';
import search from './apiService.js';

let page = 1;
function nextPage() {
  page += 1;

  refs.searchBtn.removeEventListener('click', nextPage);
  search();
}

export { page, nextPage };
