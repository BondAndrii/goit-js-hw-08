// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);



import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";


const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);

const listImage = galleryItems.map(item => `<div class="gallery__item">
  <a class="gallery__item" href=${item.original}>
    <img
      class="gallery__image"
      src="${item.preview}"      
      alt="${item.description}"
      title="${item.description}"
    />
  </a>
</div>`).join('');
// console.log(listImage);
galleryRef.insertAdjacentHTML("beforeend", listImage);
// console.log(galleryRef);
galleryRef.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('Клік');
});
let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});