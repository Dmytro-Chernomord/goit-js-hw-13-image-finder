import refs from './refs.js';

function scroll(height) {
  setTimeout(() => {
    window.scrollTo({
      top: height + refs.form.clientHeight,
      behavior: 'smooth',
    });
  }, 1000);
}

export default scroll;
