import React from "react";
import Button from "./Button";

const sizes = ["Small", "Midium", "Large"];

function ButtonPackage({ color }) {
  return (
    <div>
      {sizes.map((size) => {
        return <Button color={color} size={size} />;
      })}
    </div>
  );
}

export default ButtonPackage;
