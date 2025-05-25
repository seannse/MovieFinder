import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  padding: 1rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1230px) {
    max-width: 1230px;
  }
`;
