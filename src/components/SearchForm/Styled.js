import styled from 'styled-components';

export const FromStyled = styled.form`
  margin-bottom: 30px;
  text-align: center;
  position: relative;

  & input {
    outline: none;
    padding-left: 40px;

    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid transparent;
    border-radius: 20px;
    font-size: 18px;
    color: white;

    width: 300px;
    height: 40px;

    transition: border 250ms linear, box-shadow 250ms linear;

    &::placeholder {
      color: #c4c4c4;
    }

    @media screen and (min-width: 768px) {
      width: 500px;
    }
  }

  & input:hover {
    border-color: #c4c4c4;
  }

  & input:focus {
    box-shadow: 0px 0px 20px -12px #d9d9d9;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  & button {
    width: 24px;
    height: 24px;

    background-color: inherit;
    border: none;
    padding: 0;

    position: absolute;
    top: 20%;
    transform: translateY(-35%);
    transform: translateX(-200%);
  }

  & svg {
    width: 100%;
    height: 100%;

    transition: transform 250ms linear, top 250ms linear;
    color: #c4c4c4;
  }

  & input:focus + button > svg {
    top: 25%;
    transform: scale(1.15);
  }
`;
