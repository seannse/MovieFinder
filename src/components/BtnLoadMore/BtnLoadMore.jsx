import css from './BtnLoadMore.module.css';

const Button = ({ onButtonLoadMoreClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onButtonLoadMoreClick}>
      Load more
    </button>
  );
};

export default Button;
