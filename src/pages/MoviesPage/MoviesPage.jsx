import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  MovieList,
  SearchForm,
  Loader,
  BtnLoadMore,
  BtnScrollToTop,
} from '../../components';
import { getByQueryMovies } from '../../services/api';

import { Container } from '../../styles/Container';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);

  const updatePage = () => {
    // console.log(page);
    setPage(prevPage => prevPage + 1);
    // console.log(page);
  };

  useEffect(() => {
    if (!query) return;

    if (search.toLowerCase() !== query.toLowerCase()) {
      console.log(search);
      console.log(query);
      setSearch(query);
      setMovies([]);
      setPage(1);
      setTotalMovies(0);
      getMovies(query);
      return;
    }

    async function getMovies(value) {
      if (!value) return;
      setError(null);

      try {
        setIsLoading(true);
        const data = await getByQueryMovies(value, page);
        console.log(data);

        setMovies(prevState => {
          const allMovies = [...prevState, ...data.movies];
          const uniqueMovies = Array.from(
            new Map(allMovies.map(movie => [movie.id, movie])).values()
          );
          return uniqueMovies;
        });
        setTotalMovies(data.total_results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies(query);
  }, [query, page, search]);

  return (
    <>
      <SearchForm />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {movies?.length > 0 && <MovieList movies={movies} />}
      {totalMovies !== movies?.length && query && (
        <BtnLoadMore onButtonLoadMoreClick={updatePage} />
      )}
      {query && !movies?.length && <p>Nothing found</p>}
      <BtnScrollToTop />
    </>
  );
};

export default MoviePage;
