import React, { useState } from "react";

const editorText = [
  { value: "h1", text: "Heading 1" },
  { value: "h2", text: "Heading 2" },
  { value: "h3", text: "Heading 3" },
  { value: "h4", text: "Heading 4" },
  { value: "h5", text: "Heading 5" },
  { value: "h6", text: "Heading 6" },
  { value: "p", text: "Paragraph" },
  { value: "span", text: "Span Text" },
];
const TextFont = ({ onHandleTextStyle, currentTextStyle }) => {
  // handle on click events
  const handleTextStyle = (e) => {
    const value = e.target.getAttribute("data-value");
    const text = e.target.innerText;
    console.log("----------", value, text);
    if (value && text) {
      onHandleTextStyle({ text, value });
    }
  };

  return (
    <div className="text-style-selector selector" onClick={handleTextStyle}>
      {editorText.map((text) => (
        <div
          key={text.value}
          className={`text-style ${
            currentTextStyle.value === text.value ? "selected-text" : ""
          }`}
          data-value={text.value}
        >
          {text.text}
        </div>
      ))}
    </div>
  );
};

export default TextFont;
