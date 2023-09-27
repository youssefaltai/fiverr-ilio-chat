import React, { CSSProperties } from "react";
import { DescriptionStyle } from "./DescriptionStyle.styled";

interface DescriptionProps {
  description: string;
  className?: string;
  style?: CSSProperties;
}

const Description: React.FC<DescriptionProps> = ({
  description,
  style = {},
}) => {
  return (
    <DescriptionStyle>
    <div className='container' style={style}>
      <h3 className='title'></h3>
      <p>{description}</p>
    </div>
    </DescriptionStyle>
  );
};

export default Description;
