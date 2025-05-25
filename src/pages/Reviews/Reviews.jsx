import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components';
import { getReviewsMovie } from '../../services/api';
import { ReviewsWrapper } from './Styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    getReviews(movieId);
  }, [movieId]);

  async function getReviews(id) {
    setError(null);
    try {
      setIsLoading(true);
      const data = await getReviewsMovie(id);

      setReviews(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <ReviewsWrapper>
        <ul className="review-list">
          {reviews?.length > 0 ? (
            reviews.map(({ author, content, id }) => (
              <li className="review-item" key={id}>
                <b className="review-author">{author}</b>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p>We don't have any reviews for this movie.</p>
          )}
        </ul>
      </ReviewsWrapper>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Reviews;
