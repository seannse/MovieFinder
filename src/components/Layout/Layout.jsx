import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar, Loader } from '../index';
import { FavoritesContext } from '../../context/favoritesContext';

import { Container } from '../../styles/Container';

const Layout = () => {
  const [favoriteQuantity, setFavoriteQuantity] = useState(
    () => JSON.parse(localStorage.getItem('favorites'))?.length ?? 0
  );

  const updateFavorites = length => setFavoriteQuantity(length);
  return (
    <>
      <FavoritesContext.Provider
        value={{
          favoriteQuantity,
          updateFavorites,
        }}
      >
        <Container>
          <AppBar />
        </Container>

        <main>
          <Suspense fallback={<Loader />}>
            <Container>{<Outlet />}</Container>
          </Suspense>
        </main>
      </FavoritesContext.Provider>
    </>
  );
};

export default Layout;
