// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const div = document.querySelector(".gallery");

const imageCard = galleryItems.map((obj) => 
` <div class="gallery__item">
        <a class="gallery__link" href="${obj.original}">
         <img
         class="gallery__image"
         src="${obj.preview}"
         alt="${obj.description}"/>
        </a>
    </div>`
    ).join("");

div.insertAdjacentHTML("afterbegin", imageCard);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});