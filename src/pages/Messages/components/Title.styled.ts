import { styled } from "styled-components";


const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  height: 66px;
  color: #292F3F;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 10px;

  /* Hide in mobile */
  @media (width <= 680px) {
    display: none;
  }
`;


export default Title;
