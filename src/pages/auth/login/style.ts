// Dependencies
import styled from "styled-components";

export const LoginStyle = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;

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
  }

  .treatment .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 0 0;
  }

  .treatment .options label {
    position: relative;
    display: block;
    padding-left: 30px;
    font-family: var(--font-family-secondary);
    font-size: 14px;
    font-weight: 700;
    color: #6a697d;
    cursor: pointer;
  }

  .treatment .options label input {
    display: none;
  }

  .treatment .options label span {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 2px;
  }

  .treatment .options label:hover input ~ span {
    background-color: #e7e7e7;
  }

  .treatment .options label input:checked ~ span {
    background: linear-gradient(
      90deg,
      rgba(99, 175, 242, 1) 0%,
      rgba(97, 92, 251, 1) 100%
    );
  }

  .treatment .options label span:after {
    content: "";
    position: absolute;
    display: none;
    top: 2px;
    left: 6px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .treatment .options label input:checked ~ span:after {
    display: block;
  }

  .treatment .options p {
    margin: 0;
    font-family: var(--font-family-secondary);
    font-size: 14px;
    font-weight: 700;
    background: linear-gradient(
      90deg,
      rgba(99, 176, 243, 1) 0%,
      rgba(90, 87, 255, 1) 75%,
      rgba(160, 147, 244, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
  }
`;

