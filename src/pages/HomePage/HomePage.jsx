import { useEffect, useState } from 'react';

import {
  MovieList,
  Loader,
  BtnLoadMore,
  BtnScrollToTop,
} from '../../components/index.js';

import { getTrendingMovies } from '../../services/api';

import { Container } from '../../styles/Container';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);

  const updatePage = () => setPage(prevPage => prevPage + 1);

  useEffect(() => {
    async function getMovies() {
      setError(null);
      try {
        setIsLoading(true);
        const data = await getTrendingMovies(page);
        setTotalMovies(data.total_results);
        setMovies(prevState => {
          const allMovies = [...prevState, ...data.movies];
          const uniqueMovies = Array.from(
            new Map(allMovies.map(movie => [movie.id, movie])).values()
          );
          return uniqueMovies;
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [page]);

  return (
    <>
      <h1>Trending movies</h1>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {movies.length > 0 && <MovieList location={location} movies={movies} />}
      {totalMovies !== movies?.length && (
        <BtnLoadMore onButtonLoadMoreClick={updatePage} />
      )}
      <BtnScrollToTop />
    </>
  );
};

export default HomePage;
