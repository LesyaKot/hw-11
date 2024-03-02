export function pixabayImages(query) {
  const baseURL = 'https://pixabay.com/api/';
  const key = '42468615-7a21ca39eb8f796f5c09d98b3';
  const image_type = 'photo';
  const orientation = 'horizontal';
  const safesearch = true;
  
  const link = `${baseURL}?key=${key}&q=${query}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`;

  return fetch(link)
    .then(responce => {
      if (!responce.ok) {
        throw new Error('error while fetching');
      }
      return responce.json();
    })
   
}
