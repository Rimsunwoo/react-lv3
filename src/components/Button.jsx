import React from "react";
import { styled } from "styled-components";

const StButton = styled.button`
  width: ${(props) => props.size}300px;
  height: 50px;
`;

function Button({ color, size }) {
  return (
    <div>
      <button className="btn-l btn"></button>
      <button className="btn-m btn"></button>
      <button className="btn-s btn"></button>
    </div>
  );
}

export default Button;
