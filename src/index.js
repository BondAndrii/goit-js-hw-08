import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);
const listImage = galleryItems.map(item => `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('')
// console.log(listImage);
galleryRef.insertAdjacentHTML("beforeend", listImage);
// console.log(galleryRef);
let getUrl
galleryRef.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Клік');
    console.log(event.target.dataset.source);
    getUrl=event.target.dataset.source;
   
    console.log(modalImage.element().querySelector('img').src)
    modalImage.element().querySelector('img').src = getUrl;
    console.log(modalImage.element().querySelector('img'));
    modalImage.element().querySelector('img').alt = event.target.alt
    console.log(event.target.getAttribute('alt'));
    console.log(event.target.alt);
    modalImage.show();
});
const modalImage = basicLightbox.create(
    `<img src="" alt="">`,
    {
        onShow: () => window.addEventListener('keydown', closeModal),
        onClose: () => window.removeEventListener('keydown', closeModal)
    }

)
function closeModal(event) {
    if (event.key === 'Escape') {
        modalImage.close()
    }
}