import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { FaFilm, FaHeart } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HeaderStyled } from './Styled';
import Counter from './Counter';

const AppBar = ({ favoriteQuantity }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // console.log('перерендер AppBar');

  const handleMenuClick = () => setShowMobileMenu(p => !p);

  return (
    <HeaderStyled>
      <Link to={'/'}>
        <div className="animate">
          <span>
            <FaFilm />
          </span>
          <span>M</span>
          <span>o</span>
          <span>v</span>
          <span>i</span>
          <span>e</span>
          <span>F</span>
          <span>i</span>
          <span>n</span>
          <span>d</span>
          <span>e</span>
          <span>r</span>
        </div>
      </Link>
      <nav>
        {!isMobile && (
          <ul>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'movies'}>Movies</NavLink>
            </li>
            <li>
              <NavLink to={'favorites'}>
                <FaHeart style={{ width: 28, height: 28 }} />
                <Counter favoriteQuantity={favoriteQuantity} />
                {/* {!!moviesFavCount && (
                  <span className="counter">{moviesFavCount}</span>
                )} */}
              </NavLink>
            </li>
          </ul>
        )}
        {isMobile && (
          <button onClick={handleMenuClick} className="menu-btn">
            <RxHamburgerMenu style={{ width: 28, height: 28, padding: 0 }} />
          </button>
        )}
      </nav>
      {isMobile && showMobileMenu && (
        <div className="mobile-menu">
          <button onClick={handleMenuClick} className="menu-btn">
            X
          </button>
          <ul>
            <li>
              <Link onClick={handleMenuClick} to={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleMenuClick} to={'movies'}>
                Movies
              </Link>
            </li>
            <li>
              <Link onClick={handleMenuClick} to={'favorites'}>
                My Favorites
                <FaHeart style={{ width: 28, height: 28 }} />
                <Counter favoriteQuantity={favoriteQuantity} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </HeaderStyled>
  );
};

export default AppBar;
