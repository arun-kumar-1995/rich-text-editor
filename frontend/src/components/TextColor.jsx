import React, { memo } from "react";

const colors = ["black", "red", "green", "blue", "orange", "cyan"];

const TextColor = memo(({ onHandleTextColorChange }) => {
  const handleTextColorChange = (e) => {
    const textColor = e.target.getAttribute("data-color");
    if (textColor) {
      onHandleTextColorChange(textColor);
    }
  };
  return (
    <div
      className="text-color-selector selector"
      onClick={handleTextColorChange}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          data-color={color}
          className="color"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
});

export default TextColor;
