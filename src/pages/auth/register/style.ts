// Dependencies
import styled from "styled-components";

export const RegisterStyle = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;

  .miniature {
    width: 1300px;
    height: 650px;
    border-radius: 6px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    display: flex;
  }

  @media (max-width: 1450px) {
    .miniature {
      width: 480px !important;
    }
  }

  @media (max-width: 710px) {
    .miniature {
      width: 100% !important;
      height: 100% !important;
    }
  }

  .treatment {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 70px;
  }

  @media (max-width: 710px) {
    .treatment {
      padding: 40px !important;
    }
  }

  .treatment img {
    width: 50px;
    height: 50px;
    margin-left: -10px;
    margin-bottom: 4px;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .successfulRegistration {
    margin-bottom: 30px;
    font-family: var(--font-family-secondary);
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    color: #000;
  }

  .line {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .line h4 {
    margin: 0;
    font-family: var(--font-family-secondary);
    font-size: 16px;
    font-weight: 700;
    color: #000;
  }

  .line span {
    font-family: var(--font-family-secondary);
    font-weight: 700;
    font-size: 14px;
    color: #ff403c;
    margin: 0;
  }

  .main select {
    appearance: none;
    margin-top: 5px;
    width: 100%;
    box-sizing: border-box;
    font-family: var(--font-family-secondary);
    font-size: 15px;
    padding: 12px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: 0;
    cursor: pointer;
  }

  .main select option {
    margin: 10px;
    background-color: #f0f0f0;
    font-family: var(--font-family-secondary);
    font-size: 15px;
    color: #000;
  }
`;

