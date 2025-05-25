import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
  font-size: 18px;

  & svg {
    padding-top: 10px;
  }

  & .counter-thumb {
    position: relative;
  }

  & .counter {
    position: absolute;
    color: #ff6b6b;
    font-size: 16px;
    vertical-align: super;
  }

  & .mobile-menu {
    background-color: rgb(39, 49, 44);
    position: fixed;
    width: 50%;
    height: 40vh;
    top: 0;
    right: 0;
    padding: 15px;
    z-index: 2;

    & ul {
      display: flex;
      flex-direction: column;
    }
  }

  & .menu-btn {
    background-color: inherit;
    border: none;
    padding: 0;
    color: inherit;
  }

  // Animation logo

  & .animate {
    display: flex;
    align-items: flex-end;
    align-self: end;
    gap: 5px;
  }

  & span {
    font-size: 36px;
    display: inline-block;
    color: #aafadd;
    opacity: 0;
    transform: translate(200px, -100px) scale(2);
    animation: ballDrop 1.2s forwards;
  }

  & span:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  & span:nth-of-type(3) {
    animation-delay: 0.3s;
  }
  & span:nth-of-type(4) {
    animation-delay: 0.4s;
  }
  & span:nth-of-type(5) {
    animation-delay: 0.5s;
  }
  & span:nth-of-type(6) {
    animation-delay: 0.6s;
  }
  & span:nth-of-type(7) {
    animation-delay: 0.7s;
  }
  & span:nth-of-type(8) {
    animation-delay: 0.8s;
  }
  & span:nth-of-type(9) {
    animation-delay: 0.9s;
  }
  & span:nth-of-type(10) {
    animation-delay: 1s;
  }
  & span:nth-of-type(11) {
    animation-delay: 1.1s;
  }
  & span:nth-of-type(12) {
    animation-delay: 1.2s;
  }

  @keyframes ballDrop {
    60% {
      transform: translate(0, 20px) rotate(-180deg) scale(0.5);
    }

    100% {
      transform: translate(0) rotate(0deg) scale(1);
      opacity: 1;
    }
  }

  // Animation logo ends

  & ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: flex-end;
  }

  & a {
    text-decoration: none;
    padding: 10px 0;
  }

  & a[class='active'] {
    color: #aafadd;
    border-bottom: 2px solid rgb(170, 250, 221);

    /* & .counter-thumb {
      position: relative;
    } */
  }
`;
