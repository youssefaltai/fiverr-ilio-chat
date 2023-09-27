import {styled} from 'styled-components';


 export const DetailedStyle = styled.div`
 
  
 .title {
  color: var(--primary-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin: 20px 0;
}

.wrapper {
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
}

.item {
  display: flex;
  gap: 15px;
  align-items: center;
}

.category span:nth-child(1) {
  color: var(--primary-text-color);
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  display: block;
}

.category span:nth-child(2) {
  color: #485562;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}

@media (width <= 743px) {
  .wrapper {
    flex-direction: column;
    gap: 40px;
  }
}

 
 
 
 `