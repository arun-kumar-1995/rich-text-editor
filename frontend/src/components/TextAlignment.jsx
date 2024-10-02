import React from "react";
import {
  FiAlignLeft,
  FiAlignRight,
  FiAlignCenter,
  FiAlignJustify,
} from "react-icons/fi";

const alignments = [
  { element: FiAlignLeft, name: "Left" },
  { element: FiAlignRight, name: "Right" },
  { element: FiAlignCenter, name: "Center" },
  { element: FiAlignJustify, name: "Justify" },
];

const TextAlignment = ({ onHandleAlignmentChange }) => {
  const handleTextAlignment = (e) => {
    console.log(e.target);

    const textAlignment = e.currentTarget.getAttribute("data-alignment");
    console.log(textAlignment);
    if (textAlignment) onHandleAlignmentChange({ element: textAlignment });
  };

  return (
    <div className="alignment-selector selector" onClick={handleTextAlignment}>
      {alignments.map((alignment, index) => (
        <div key={index} data-alignment={alignment.name} className="alignment">
          {React.createElement(alignment.element)}
          <span>{alignment.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TextAlignment;
