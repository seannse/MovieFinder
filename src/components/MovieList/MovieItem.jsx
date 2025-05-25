import { Link, useLocation } from 'react-router-dom';
import { getColor } from '../../helpers/getColor';
import { RatingStyled } from './Styled';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

const MovieItem = ({ id, title, poster_path, release_date, vote_average }) => {
  const location = useLocation();
  // console.log(location);
  // console.log('/movies/' + id);
  return (
    <li>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <img
          alt={title}
          src={
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w200/${poster_path}`
              : defaultImg
          }
        />
        <div className="text-thumb">
          <h2>{title}</h2>
          <p>{release_date.substr(0, 4)}</p>
        </div>
        {!!vote_average && (
          <RatingStyled $color={getColor(vote_average)}>
            {(Math.round(vote_average * 10) / 10).toString().padEnd(3, '.0')}
          </RatingStyled>
        )}
      </Link>
    </li>
  );
};

export default MovieItem;
