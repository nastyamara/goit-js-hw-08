
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from 'simplelightbox';// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
galleryContainer.innerHTML = markup;

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();
}
function createMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
    }).join('')
 
}   
new SimpleLightbox('.gallery a', { captionDelay: 250 });        