import { useEffect, useState } from 'react';
import {
  NavLink,
  Link,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

import { Loader, MovieDatail } from '../../components';
import { getByIdMovie } from '../../services/api';

import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdArrowBack,
} from 'react-icons/io';
import { Wrapper } from './Styled';

const MovieDatailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [isCastVisible, setIsCastVisible] = useState(false);
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);

  const backPath = location.state?.from ?? '/';

  useEffect(() => {
    getDetails(movieId);
  }, [movieId]);

  useEffect(() => {
    setIsCastVisible(location.pathname.includes('cast'));
    setIsReviewsVisible(location.pathname.includes('reviews'));
  }, [location.pathname]);

  async function getDetails(id) {
    setError(null);
    try {
      setIsLoading(true);
      const data = await getByIdMovie(id);

      setMovie(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Wrapper>
      <Link className="back-btn" to={backPath}>
        <IoMdArrowBack />
        <p> Go back</p>
      </Link>
      {!!movie && <MovieDatail {...movie} />}
      {/* <div className="additional">
        <h3 className="additional-title">Additional info</h3> */}
      <ul className="additional-list">
        <li>
          <NavLink
            className="additional-links"
            state={{ from: backPath }}
            to={isCastVisible ? '' : 'cast'}
          >
            <h4>Cast</h4>
            {isCastVisible ? (
              <IoMdArrowDropup className="drop-icon" />
            ) : (
              <IoMdArrowDropdown className="drop-icon" />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="additional-links"
            state={{ from: backPath }}
            to={isReviewsVisible ? '' : 'reviews'}
          >
            <h4>Reviews</h4>
            {isReviewsVisible ? (
              <IoMdArrowDropup className="drop-icon" />
            ) : (
              <IoMdArrowDropdown className="drop-icon" />
            )}
          </NavLink>
        </li>
      </ul>
      {/* </div> */}

      <Outlet />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </Wrapper>
  );
};

export default MovieDatailsPage;
