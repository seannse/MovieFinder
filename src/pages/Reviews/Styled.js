import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  & .review-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  & .review-item {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  & .review-author {
    display: block;
    margin-bottom: 10px;
    color: #ff6b6b;
  }
`;
