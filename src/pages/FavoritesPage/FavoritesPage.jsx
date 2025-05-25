import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MovieList } from '../../components/index.js';

const FavouritesPage = () => {
  const [movies] = useState(
    () => JSON.parse(localStorage.getItem('favorites')) ?? []
  );
  const location = useLocation();

  return (
    <>
      <h1>Favorite movies</h1>
      {!!movies.length && <MovieList location={location} movies={movies} />}
    </>
  );
};

export default FavouritesPage;
