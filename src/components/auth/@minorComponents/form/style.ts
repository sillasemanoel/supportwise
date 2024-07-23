// Dependencies
import styled from "styled-components";

export const FormStyle = styled.div`
  margin-top: 10px;

  div {
    display: flex;
    justify-content: space-between;
  }

  div h4 {
    font-family: var(--font-family-secondary);
    font-size: 16px;
    font-weight: 700;
    color: #000;
    margin: 0;
  }

  div span {
    font-family: var(--font-family-secondary);
    font-weight: 700;
    font-size: 14px;
    color: #ff403c;
    margin: 0;
  }

  input {
    margin-top: 5px;
    width: 100%;
    box-sizing: border-box;
    font-family: var(--font-family-secondary);
    font-size: 15px;
    padding: 12px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: 0;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

