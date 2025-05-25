import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components';
import { getCastMovies } from '../../services/api';
import { CastList } from './Styled';
import CastItem from './CastItem';

const Cast = () => {
  const [cast, setCast] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    getCast(movieId);
  }, [movieId]);

  async function getCast(id) {
    setError(null);
    try {
      setIsLoading(true);
      const data = await getCastMovies(id);

      setCast(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div>
        <h2>Cast</h2>
        <CastList>
          {cast?.length > 0 ? (
            cast.map(
              ({ name, character, id, profile_path, isScrollAnchor }) => (
                <CastItem
                  key={id}
                  name={name}
                  character={character}
                  profile_path={profile_path}
                  isScrollAnchor={isScrollAnchor}
                />
              )
            )
          ) : (
            <p>We don't have any cast for this movie.</p>
          )}
        </CastList>
      </div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Cast;
