import { createMarkup } from './createMarkup.js';
import { images } from './images.js';

const galleryEl = document.querySelector('.gallery');

const itemsMarkup = createMarkup(images);

galleryEl.innerHTML = itemsMarkup;

const onGalleryClick = event => {
  event.preventDefault();

  const img = event.target.closest('.gallery-image');
  if (!img) return;

  const largeSrc = img.dataset.source;
  console.log(largeSrc);
  const onKeyDown = ev => {
    if (ev.key === 'Escape') modal.close();
  };

  const modal = basicLightbox.create(
    `<img class="modal-image" src="${largeSrc}" alt="${img.alt}" />`,
    {
      onShow: () => document.addEventListener('keydown', onKeyDown),
      onClose: () => document.removeEventListener('keydown', onKeyDown),
    }
  );

  modal.show();
};

galleryEl.addEventListener('click', onGalleryClick);
