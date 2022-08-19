// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');
const imageMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join('');
}

imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

imageContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const onImgClick = event.target.classList.contains('.gallery__image');
  if (!onImgClick) {
    return;
  }
}
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
