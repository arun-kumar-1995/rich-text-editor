import React from "react";

const colors = ["red", "green", "blue", "orange", "cyan"];

const TextColor = ({onHandleTextColorChange}) => {
  const handleTextColorChange =() =>{
    onHandleTextColorChange();
  }
  <div className="text-color-selector selector" onClick={handleTextColorChange}>
    {colors.map((color) => (
      <div className="color" style={{ backgroundColor: { color } }}></div>
    ))}
  </div>;
};

export default TextColor;
