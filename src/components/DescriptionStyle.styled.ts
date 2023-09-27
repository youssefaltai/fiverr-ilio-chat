import { styled } from "styled-components";

export const DescriptionStyle = styled.div`
  .container {
    margin: 40px auto;
  }

  .title {
    margin: 0;
    color: var(--primary-text-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
  }

  .title::before {
    content: "Description";
  }



  @media (width <= 428px) {
    .title::before {
      content: "Description";
    }
  }
  .container p {
    color: var(--primary-text-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin: 20px auto;
  }
`;
