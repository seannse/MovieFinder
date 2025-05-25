import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd2e6e8a57d367dba11a443cc5535b322';

export async function getTrendingMovies(page = 1) {
  const params = {
    api_key: API_KEY,
    page,
  };

  const { data } = await axios.get(`${BASE_URL}/trending/movie/day?`, {
    params,
  });

  const movies = data.results.map(
    ({ id, title, poster_path, release_date, vote_average }) => {
      return {
        id,
        title,
        poster_path,
        release_date,
        vote_average,
      };
    }
  );

  return {
    movies,
    total_results: data.total_results,
  };
}
export async function getByQueryMovies(query, page) {
  const params = {
    api_key: API_KEY,
    query,
    page,
  };

  const { data } = await axios.get(`${BASE_URL}/search/movie?`, {
    params,
  });

  const movies = data.results.map(
    ({ id, title, poster_path, release_date, vote_average }) => {
      return {
        id,
        title,
        poster_path,
        release_date,
        vote_average,
        total_results: data.total_results,
      };
    }
  );

  return {
    movies,
    total_results: data.total_results,
  };
}

export async function getByIdMovie(id) {
  const params = {
    api_key: API_KEY,
  };

  const { data } = await axios.get(`${BASE_URL}/movie/${id}?`, {
    params,
  });

  return data;
}

export async function getCastMovies(id) {
  const params = {
    api_key: API_KEY,
  };

  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits?`, {
    params,
  });

  return data.cast.map(({ name, character, id, profile_path }, idx) => ({
    name,
    character,
    id,
    profile_path,
    isScrollAnchor: !idx,
  }));
}

export async function getReviewsMovie(id) {
  const params = {
    api_key: API_KEY,
  };

  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews?`, {
    params,
  });

  return data.results.map(({ author, content, id }) => ({
    author,
    content,
    id,
  }));
}
