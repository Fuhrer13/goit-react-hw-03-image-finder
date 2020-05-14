import axios from 'axios';

const getImagesWithQuery = (query, page = 1) => {
  const key = '15801135-59eedb575c96309a6a89f9f3e';
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  getImagesWithQuery,
};
