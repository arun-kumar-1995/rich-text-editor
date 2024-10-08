import React, { memo } from "react";
import {
  FiAlignLeft,
  FiAlignRight,
  FiAlignCenter,
  FiAlignJustify,
} from "react-icons/fi";

const alignments = [
  { element: FiAlignLeft, position: "Left" },
  { element: FiAlignRight, position: "Right" },
  { element: FiAlignCenter, position: "Center" },
  { element: FiAlignJustify, position: "Justify" },
];

const TextAlignment = memo(
  ({ onHandleAlignmentChange, currentAlignmentStyle }) => {
    const handleTextAlignment = (e) => {
      const textAlignment = e.target.getAttribute("data-alignment");
      console.log(textAlignment);
      if (textAlignment) onHandleAlignmentChange({ position: textAlignment });
    };

    return (
      <div
        className="alignment-selector selector"
        onClick={handleTextAlignment}
      >
        {alignments.map((alignment, index) => (
          <div
            key={index}
            data-alignment={alignment.position}
            className={`alignment ${
              alignment.position === currentAlignmentStyle.position
                ? "selected-align"
                : ""
            }`}
          >
            {React.createElement(alignment.element)}
            {alignment.position}
          </div>
        ))}
      </div>
    );
  }
);

export default TextAlignment;
