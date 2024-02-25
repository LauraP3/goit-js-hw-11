export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '42561681-381e837ed31323d8360b64253';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};
