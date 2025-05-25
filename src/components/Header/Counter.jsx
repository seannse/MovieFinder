// import { useLocation } from 'react-router-dom';

import { useFavorites } from '../../context/favoritesContext';
// import { useContext, useEffect, useState } from 'react';

// const Counter = ({ favoriteQuantity }) => {
//   const [quantity, setQuantity] = useState(favoriteQuantity);

//   useEffect(() => {
//     setQuantity(favoriteQuantity);
//   }, [favoriteQuantity]);

//   return <>{!!quantity && <span className="counter">{quantity}</span>}</>;
// };

// export default Counter;

const Counter = () => {
  // const [quantity, setQuantity] = useState(favoriteQuantity);

  // useEffect(() => {
  //   setQuantity(favoriteQuantity);
  // }, [favoriteQuantity]);

  const { favoriteQuantity } = useFavorites();

  return (
    <>
      {!!favoriteQuantity && (
        <span className="counter">{favoriteQuantity}</span>
      )}
    </>
  );
};

export default Counter;
