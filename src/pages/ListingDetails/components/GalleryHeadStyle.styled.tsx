import {styled} from  'styled-components';


export const GalleryHeadStyle = styled.div`
    .mainContainer {
}

.header {
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  display: flex;
  gap: 40px;
}
.header p {
  margin: 10px 0;
}

.subHeader {
  display: flex;
  align-items: center;
  margin: 0 0 19px 0;
  justify-content: space-between;
}

.locationAndType {
  display: flex;
  align-items: center;
  gap: 40px;
}
.location {
  color: var(--primary-text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 6px;
}

.type {
  color: #485562;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-transform: lowercase;
}

.utils {
  display: flex;
  align-items: center;
  gap: 18px;
  width: fit-content;
}

.utilBtn {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--primary-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;
}

@media (width <= 743px) {
  .subHeader {
    margin: 12px 0 0 0;
  }
  .header {
    gap: 3px;
    font-size: 20px;
    flex-direction: column;
  }
  .header p {
    margin: 0;
  }
  .locationAndType {
    flex-direction: column;
    gap: 4px;
    align-items: start;
  }
  .utils {
    display: none;
  }
}





`