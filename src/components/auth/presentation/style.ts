// Dependencies
import styled from "styled-components";

export const PresentationStyle = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(224, 192, 253, 1) 0%,
    rgba(106, 186, 253, 1) 72%,
    rgba(166, 187, 253, 1) 100%
  );
  border-radius: 6px 0px 0px 6px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1450px) {
    display: none !important;
  }

  .ghostPresentation {
    width: 350px;
    height: 350px;
    padding: 30px 40px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.17) 0%,
      rgba(255, 255, 255, 0.17) 35%,
      rgba(255, 255, 255, 0.17) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ghostPresentation ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0 18px;
  }

  .ghostPresentation ul li {
    display: flex;
  }

  .ghostPresentation ul li span {
    margin: 0;
    font-size: 56px;
    color: #fff;
  }

  .arrowPresentation {
    position: relative;
    top: 4px;
    font-size: 50px !important;
  }

  .darkPresentation {
    color: #17154d !important;
  }

  .ghostPresentation div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ghostPresentation div span {
    font-family: var(--font-family-secondary);
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }
`;
