import React from "react";

const editorText = [{ value: "h1", text: "Heading 1" }];
const TextFont = () => {
  return (
    <>
      {editorText.map((text) => (
        <div className="text-style" value={text.value}>
          {text.text}
        </div>
      ))}
    </>
  );
};

export default TextFont;
