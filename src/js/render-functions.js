
export function getImages(images) {
    const gallery = document.querySelector('.gallery');
  
  gallery.innerHTML = images
    .map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => 
         `<li class="gallery-item">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" width="300" height="200" />
            </a>
            <p>likes: ${likes}</p>
            <p>views: ${views}</p>
            <p>comments: ${comments}</p>
            <p>downloads: ${downloads}</p>
        </li>`
      )
    .join('');

    }
    