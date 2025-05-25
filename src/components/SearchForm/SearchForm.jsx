import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { FromStyled } from './Styled';
import { motion } from 'framer-motion';

const SearchForm = () => {
  const inputRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();

  const onFormSubmit = event => {
    event.preventDefault();
    const value = inputRef.current.value.trim().toLowerCase();
    // console.log(value);

    if (!value) {
      event.target.reset();
      return;
    }

    if (value === searchParams) return;

    setSearchParams({ query: value });
    // event.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <FromStyled onSubmit={onFormSubmit}>
        <input
          type="text"
          name="searchQuery"
          ref={inputRef}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
          defaultValue={searchParams?.get('query') ?? ''}
        />
        <button type="submit">
          <CiSearch />
        </button>
      </FromStyled>
    </motion.div>
  );
};

export default SearchForm;
