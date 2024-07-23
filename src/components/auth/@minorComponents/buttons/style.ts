// Dependencies
import styled from "styled-components";

export const ColoredButtonStyle = styled.div`
  button {
    width: 100%;
    margin-top: 20px;
    padding: 18px;
    border: 0px;
    border-radius: 6px;
    font-family: var(--font-family-secondary);
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(
      90deg,
      rgba(99, 176, 243, 1) 0%,
      rgba(97, 92, 251, 1) 73%,
      rgba(160, 147, 244, 1) 100%
    );
    outline: none;
    cursor: pointer;
  }
`;
export const SimpleButtonStyle = styled.div`
  button {
    width: 100%;
    padding: 18px;
    margin-top: 10px;
    border: 1px solid #bebebe;
    border-radius: 6px;
    font-family: var(--font-family-secondary);
    font-size: 15px;
    font-weight: 700;
    color: #000;
    background: #fff;
    outline: none;
    cursor: pointer;
  }
`;

