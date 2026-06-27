import axios from 'axios';

const API_KEY = '56433507-28871935314b081e8c424dd0b';

export async function getImagesByQuery(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      page,
      per_page: 15,
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
