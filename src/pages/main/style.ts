// Dependencies
import styled from "styled-components";

export const HomeStyle = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  div {
    flex: none;
    gap: 10px;
    display: flex;
    align-items: center;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 7px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  img {
    width: 45px;
  }

  p {
    font-size: 22px;
  }

  button {
    display: flex;
    padding: 10px;
    background-color: transparent;
    border: 0;
    border-radius: 100%;
    cursor: pointer;
  }

  button:hover {
    background-color: #e7e7e7;
  }

  button svg {
    font-size: 30px;
  }
`;
