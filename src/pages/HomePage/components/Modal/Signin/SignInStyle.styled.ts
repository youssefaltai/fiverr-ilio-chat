import { styled } from "styled-components";

export const SignInStyle = styled.div`
  .about {
    text-align: center;
  }
  .about h1 {
    color: var(--primary-text-color);
    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
    margin: 0 0 15px 0;
  }

  .about span,
  .footer span {
    color: #485562;
    font-size: 14px;
    font-weight: 400;
    text-transform: lowercase;
    line-height: 17px;
  }

  .authBtns {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .authBtn {
    border-radius: 8px;
    outline: 1px solid #c9ced3;
    padding: 12px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .authIcon {
    height: 20px;
    width: 20px;
  }
  .authContent {
    color: var(--primary-text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-transform: capitalize;
  }
  .footer {
    position: absolute;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    width: calc(100% - 48px);
  }
  .footer span:first-child {
    text-transform: none;
  }
  .footer .signUp {
    color: var(--primary-text-color);
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
  }

  @media (width <= 743px) {
    .main {
      width: 100%;
      max-width: 100%;
      min-height: 100%;
      overflow: scroll;
      border-radius: unset;
    }
    .main header {
      padding: 21px 0;
    }
    .main header button:first-child {
      display: none;
    }
    .main header button:last-child {
      display: block !important;
    }
  }
`;
