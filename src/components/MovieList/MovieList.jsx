import { MovieItem } from '../index.js';
import { ListStyled } from './Styled.js';
import { motion } from 'framer-motion';

const MovieList = ({ movies }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ListStyled>
        {movies.map(el => {
          return <MovieItem key={el.id} {...el} />;
        })}
      </ListStyled>
    </motion.div>
  );
};

export default MovieList;
