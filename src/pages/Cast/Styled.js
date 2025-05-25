import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  & .castItem {
    width: 150px;
    text-align: center;
  }

  & .castImage {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
