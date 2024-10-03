import React, { useEffect, useRef, useState } from "react";
import "../styles/EditorScreen.css";

const EditorScreen = () => {
  const [content, setContent] = useState();
  const editorScreenRef = useRef(null);

  const handleScreenRef = () => {
    if (editorScreenRef.current) {
      editorScreenRef.current.focus();
    }
  };
  const handleScreenChange = (e) => {
    e.preventDefault();
    setContent(e.target.innerHTML);
  };

  return (
    <div className="editor-container">
      <div
        className="editor-screen"
        contentEditable="true"
        onClick={handleScreenRef}
        onInput={handleScreenChange}
        ref={editorScreenRef}
        suppressContentEditableWarning="false"
      >
        {content}
      </div>
    </div>
  );
};

export default EditorScreen;
