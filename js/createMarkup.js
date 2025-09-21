export const createMarkup = images =>
  images
    .map(
      ({ preview, original, description }) => `
<li class="gallery-item">
<a class="gallery-link" href="${original}">
<img
class="gallery-image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>
`
    )
    .join('');
