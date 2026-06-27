import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loaderMoreBtn = document.querySelector('.loader-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <li class="items-list">
            <a href="${image.largeImageURL}">
              <img src="${image.webformatURL}" class="img" alt="${image.tags}"/>
            </a>
          <div class="hits-p">
            <p>Likes:${image.likes}</p>
            <p>Views:${image.views}</p>
            <p>Comments:${image.comments}</p>
            <p>Downloads:${image.downloads}</p>
          </div>
        </li>`;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  loaderEl.classList.add('hidden');
}

export function showLoadMoreButton() {
  loaderMoreBtn.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  loaderMoreBtn.classList.add('hidden');
}
