import styled from 'styled-components';

export const MovieInfo = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }

  & .image-thumb {
    position: relative;
  }
  & .image {
    border-radius: 10px;
    min-width: 280px;
  }

  & .description {
    max-width: 400px;
  }

  & .title {
    margin-bottom: 30px;
  }

  & .overview {
    margin-bottom: 20px;
  }

  & .genres-description {
    margin-bottom: 20px;
  }

  & .likeButton {
    width: 200px;
    outline: none;
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  & .likeButton:hover {
    background-color: #ff4c4c;
    transform: scale(1.05);
  }
  & .likeButton:active {
    background-color: #e60000;
    transform: scale(0.95);
  }

  & .likeIcon {
    font-size: 20px;
  }
`;
