import React from "react";

const colors = ["red", "green", "blue", "orange", "cyan"];

const TextColor = () => {
  <>
    {colors.map((color) => (
      <div className="color" style={{ backgroundColor: { color } }}></div>
    ))}
  </>;
};

export default TextColor;
