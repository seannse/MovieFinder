import React, { useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import css from './BtnScrollToTop.module.css';

function BtnScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className={css.btn}>
          <BiArrowToTop className={css.icon} />
        </button>
      )}
    </>
  );
}

export default BtnScrollToTop;
