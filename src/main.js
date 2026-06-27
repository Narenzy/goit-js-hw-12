import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { showLoadMoreButton } from './js/render-functions';
import { hideLoadMoreButton } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
let currentQuery = '';
let currentPage = 1;

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const query = formData.get('search-text').trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Pleas enter a search query',
    });
    return;
  }
  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / 15);
    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
    form.reset();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
    });
    console.log(error);
  } finally {
    hideLoader();
  }
});
