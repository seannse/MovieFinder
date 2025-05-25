import styled from 'styled-components';

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start; */

  & .back-btn {
    border-bottom: 2px solid rgba(170, 250, 221, 0);
    transition: border-bottom linear 250ms;
    display: inline-flex;
    flex-direction: row;
    gap: 5px;
    align-items: flex-end;
    margin-bottom: 30px;
  }

  & .back-btn:hover {
    color: #aafadd;
    border-bottom: 2px solid rgb(170, 250, 221);
  }

  & .active {
    background-color: #ff6b6b;
  }

  & .additional-list {
    display: flex;
    gap: 20px;
    flex-direction: row;
    margin-bottom: 20px;
  }
  & .additional-links {
    font-weight: normal;
    transition: transform 250ms linear;
    display: flex;
    align-items: flex-end;
    gap: 5px;

    max-height: 40px;
    border: 1px solid #ff6b6b;
    border-radius: 25px;
    padding: 10px 20px;
  }

  & .additional-links:hover {
    transform: translateY(5px);
  }

  & .drop-icon {
    width: 24px;
    height: 24px;
    align-self: flex-end;
  }
`;
