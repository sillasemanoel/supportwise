// Dependencies
import styled from "styled-components";

export const ForgotThePasswordStyle = styled.section`
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
    margin-bottom: 4px;
  }
`;

