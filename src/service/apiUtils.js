
// const API_MAIN_URL = 'https://api.themoviedb.org/3/';
const API_SEARCH = (name = '', pageValue = 1) =>
  `search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=${pageValue}&include_adult=false`;
const API_KEY = '638157d2144cf1597ea299c77ac36a11';
const API_TRENDING = (pageValue = 1) =>
  `trending/movie/day?api_key=${API_KEY}`;
const API_ID = id => `movie/${id}?api_key=${API_KEY}`;


const apiUtils = {
  API_KEY,

  API_SEARCH,
  API_TRENDING,
  API_ID,

};
export default apiUtils;
