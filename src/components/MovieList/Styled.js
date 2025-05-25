import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: grid;
  max-width: calc(100% - 48px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 24px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  & li {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.1);
    transition: transform linear 500ms;
  }

  & img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & li:hover {
    transform: scale(1.05);
    cursor: zoom-in;
  }

  & .text-thumb {
    padding: 5px;
    text-align: center;
  }

  & h2 {
    font-size: 16px;
    font-weight: normal;
  }
`;

export const RatingStyled = styled.p`
  position: absolute;
  background-color: ${p => {
    return p.$color ? p.$color : 'green';
  }};
  top: 10px;
  left: 0;
  color: black;
  width: 70px;
  text-align: center;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  padding: 5px;
`;
