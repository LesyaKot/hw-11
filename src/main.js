import { getImages } from './js/render-functions';
import { pixabayImages } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import simpleLightbox from 'simplelightbox';

const gallery = document.querySelector('.gallery');
const input = document.querySelector('[data-search]');
const submitBtn = document.querySelector('[data-start]');
const form = document.querySelector('.form-section');

const lightbox = new simpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});

let inputValue = '';

gallery.innerHTML = '';

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  inputValue = input.value.trim();

  if (!inputValue) {
    alert('fill the form');
    return;
  }
  gallery.innerHTML = '';

  pixabayImages(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        alert('we do not have ane images');
      } else {
        getImages(data.hits);
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      alert(`Error: ${error.message}`);
    });
}

// gallery.insertAdjacentHTML('beforeend', getImages);
