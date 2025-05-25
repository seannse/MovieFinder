import { useEffect, useRef, useState } from 'react';
import { getColor } from '../../helpers/getColor';
import { FaHeart } from 'react-icons/fa6';
import { useFavorites } from '../../context/favoritesContext';

import { RatingStyled } from '../MovieList/Styled';
import { MovieInfo } from './Styled';

const MovieDatail = ({
  id,
  title,
  genres,
  overview,
  release_date,
  vote_average,
  poster_path,
}) => {
  const [movies, setMovies] = useState(
    () => JSON.parse(localStorage.getItem('favorites')) ?? []
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const firstRender = useRef(true);
  const { updateFavorites } = useFavorites();

  useEffect(() => {
    setIsFavorite(movies.some(el => el.id === id));
  }, [id, movies]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    localStorage.setItem('favorites', JSON.stringify(movies));
    updateFavorites(movies.length);
  }, [movies, updateFavorites]);

  function handleLike() {
    if (isFavorite) {
      setMovies(movies.filter(el => el.id !== id));
      setIsFavorite(false);
    } else {
      setMovies(prev => [
        ...prev,
        { id, title, poster_path, release_date, vote_average },
      ]);
      setIsFavorite(true);
    }
  }

  return (
    <MovieInfo>
      <div className="image-thumb">
        <img
          className="image"
          src={poster_path && 'https://image.tmdb.org/t/p/w300' + poster_path}
          alt={title}
        />
        {!!vote_average && (
          <RatingStyled $color={getColor(vote_average)}>
            {(Math.round(vote_average * 10) / 10).toString().padEnd(3, '.0')}
          </RatingStyled>
        )}
      </div>
      <div className="description">
        <h1 className="title">
          {title} ({release_date.substr(0, 4)})
        </h1>
        <h3 className="genres-title">Genres:</h3>
        <p className="genres-description">
          {genres.map(genre => genre.name).join(', ')}
        </p>
        <p className="overview">{overview}</p>
        <button className="likeButton" onClick={handleLike}>
          {isFavorite ? 'Remove from' : 'Add to'}
          <FaHeart className="likeIcon" />
        </button>
      </div>
    </MovieInfo>
  );
};

export default MovieDatail;
