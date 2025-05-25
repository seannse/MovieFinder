import { createContext, useContext } from 'react';

export const FavoritesContext = createContext({
  favoriteQuantity: 0,
  updateFavorites: () => {},
});

export const useFavorites = () => useContext(FavoritesContext);
