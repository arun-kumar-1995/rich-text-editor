import React, { lazy, Suspense, useCallback, useState } from "react";
import { BiUndo } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  FiAlignLeft,
  FiAlignRight,
  FiAlignCenter,
  FiAlignJustify,
} from "react-icons/fi";

import { MdOutlineShare } from "react-icons/md";
import { RxUnderline } from "react-icons/rx";
import { TbBold } from "react-icons/tb";
import { FiItalic } from "react-icons/fi";
import { MdOutlineFormatListNumberedRtl } from "react-icons/md";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { GoImage } from "react-icons/go";
import { GoStrikethrough } from "react-icons/go";
import { IoCodeOutline } from "react-icons/io5";

import "./styles/App.css";

import TextFont from "./components/TextFont";
import TextAlignment from "./components/TextAlignment";
import TextColor from "./components/TextColor";
const EditorScreen = lazy(() => import("./components/EditorScreen"));

// define the alignments
const alignments = [
  { element: FiAlignLeft, position: "Left" },
  { element: FiAlignRight, position: "Right" },
  { element: FiAlignCenter, position: "Center" },
  { element: FiAlignJustify, position: "Justify" },
];

const App = () => {
  // for text style
  const [textStyle, setTextStyle] = useState({
    value: "p",
    text: "Paragraph",
  });

  const [textAlignment, setTextAlignment] = useState(alignments[0]);

  const [textColor, setTextColor] = useState("black");

  const handleTextStyle = useCallback((selectedTextStyle) => {
    console.log("---TEXT STYLE----", selectedTextStyle);
    setTextStyle(selectedTextStyle);
  }, []);

  const handleAlignmentChange = useCallback((selectedTextAlignment) => {
    console.log("----ALIGN MENT----", selectedTextAlignment);
    // find the element based on position and set
    const element = alignments.find(
      (align) => align.position === selectedTextAlignment.position
    );
    console.log("----ALIGN MENT----", element);
    setTextAlignment(element);
  }, []);

  const handleTextColorChange = useCallback((selectedColor) => {
    setTextColor(selectedColor);
  }, []);

  return (
    <div className="rich-text-editor">
      <div className="rich-top-nav">
        <div className="undo-controler">
          <button className="editor-state prev-state">
            <BiUndo />
          </button>
          <button
            className="editor-state next-state"
            style={{ transform: "rotate(90deg)" }}
          >
            <BiUndo />
          </button>
        </div>
        <section className="text-styles">
          <div className="style-dropdown dropdown">
            <div className="" value={textStyle.value}>
              {textStyle.text}
            </div>
            <button className="btn-icon arrow-down">
              <RiArrowDropDownLine />
            </button>
          </div>

          <TextFont
            onHandleTextStyle={handleTextStyle}
            currentTextStyle={textStyle}
          />
        </section>

        <section className="text-alignment">
          <div className="style-dropdown dropdown">
            <div className="text-align" value="text-align">
              {React.createElement(textAlignment.element)}
              <button className="btn-icon arrow-down">
                <RiArrowDropDownLine />
              </button>
            </div>
          </div>
          <TextAlignment
            onHandleAlignmentChange={handleAlignmentChange}
            currentAlignmentStyle={textAlignment}
          />
        </section>
        <section className="text-color">
          <div className="style-dropdown dropdown">
            <div
              className="current-color"
              style={{ backgroundColor: textColor }}
            ></div>
            <button className="btn-icon arrow-down">
              <RiArrowDropDownLine />
            </button>
          </div>
          <TextColor onHandleTextColorChange={handleTextColorChange} />
        </section>
      </div>

      <Suspense fallback={<div>...loading</div>}>
        <EditorScreen />
      </Suspense>
    </div>
  );
};

export default App;
