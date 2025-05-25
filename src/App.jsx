import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout, Loader } from './components';
// import { HomePage, MovieDetailsPage, MoviesPage, Cast, Reviews } from './pages';
import './styles/App.css';

// dynamic import pages for lazy loading
const HomePage = lazy(() => {
  return import('./pages/HomePage/HomePage');
});
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
// dynamic import pages for lazy loading

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
