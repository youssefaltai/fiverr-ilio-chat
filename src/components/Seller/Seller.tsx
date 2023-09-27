import React from "react";
import recordings from "../../record.json";
import { SellerSub } from "./SellerSub";
import { SellerContainer } from "./Styles.styled";
export interface list {
  id: number;
  name: string;
  type: string;
  amount: string;
  img: string;
  a1?: string;
  a2?: string;
  a3?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  map?: any;
  active:boolean;
  title?:string;
}

const Seller: React.FC = () => {
  return (
    <SellerContainer>
      <SellerSub slides={recordings} />
    </SellerContainer>
  );
};

export default Seller;
