import refs from './refs.js';

function scroll(height) {
  setTimeout(() => {
    window.scrollTo({
      top: height + refs.form.clientHeight,
    });
  }, 1000);
}

export default scroll;
