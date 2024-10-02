import React, { useState } from "react";

import { BiUndo } from "react-icons/bi";
import {
  FiAlignLeft,
  FiAlignRight,
  FiAlignCenter,
  FiAlignJustify,
} from "react-icons/fi";
import { MdOutlineShare } from "react-icons/md";
import { RxUnderline } from "react-icons/rx";
import { TbBold } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiItalic } from "react-icons/fi";
import { MdOutlineFormatListNumberedRtl } from "react-icons/md";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { GoImage } from "react-icons/go";
import { GoStrikethrough } from "react-icons/go";
import { IoCodeOutline } from "react-icons/io5";

import "./styles/App.css";

import EditorScreen from "./components/EditorScreen";
import TextFont from "./components/TextFont";

const App = () => {
  // for text style
  const [textStyle, setTextStyle] = useState({
    value: "p",
    text: "Paragraph",
  });

  const handleTextStyle = (selectedTextStyle) => {
    console.log("--------", selectedTextStyle);
    setTextStyle(selectedTextStyle);
  };

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
              <FiAlignLeft />
              <button className="btn-icon arrow-down">
                <RiArrowDropDownLine />
              </button>
            </div>
          </div>
          <div className="alignment-selector selector">
            <div>
              <FiAlignLeft />
              <span>Left</span>
            </div>
            <div>
              <FiAlignRight />
              <span>Right</span>
            </div>
            <div>
              <FiAlignCenter />
              <span>Center</span>
            </div>
            <div>
              <FiAlignJustify />
              <span>Justify</span>
            </div>
          </div>
        </section>
        <section className="text-color">
          <div className="style-dropdown dropdown">
            <div
              className="current-color"
              style={{ backgroundColor: "black" }}
            ></div>
            <button className="btn-icon arrow-down">
              <RiArrowDropDownLine />
            </button>
          </div>
          <div className="text-color-selector selector">
            <div className="color" style={{ backgroundColor: "red" }}></div>
            <div className="color" style={{ backgroundColor: "blue" }}></div>
            <div className="color" style={{ backgroundColor: "green" }}></div>
          </div>
        </section>
        <section className="bold text-independent">
          <button className="text-bold">
            <TbBold />
          </button>
        </section>
        <section className="italic  text-independent">
          <button className="text-italic">
            <FiItalic />
          </button>
        </section>
        <section className="strike  text-independent">
          <button className="text-strike" title="text-strike">
            <GoStrikethrough />
          </button>
        </section>
        <section className="underline  text-independent">
          <button className="text-underline" title="text-underline">
            <RxUnderline />
          </button>
        </section>
        <section className="underline  text-independent">
          <button className="text-underline" title="code">
            <IoCodeOutline />
          </button>
        </section>
        <section className="number-list  text-independent">
          <button className="unorder-list">
            <MdOutlineFormatListNumbered />
          </button>
        </section>
        <section className="list  text-independent">
          <button className="bullet-list">
            <MdOutlineFormatListBulleted />
          </button>
        </section>
        <section className="image  text-independent">
          <button className="bullet-list">
            <GoImage />
          </button>
        </section>
        <section className="share  text-independent">
          <button className="bullet-list" title="share">
            <MdOutlineShare />
          </button>
        </section>
      </div>

      <EditorScreen />
    </div>
  );
};

export default App;
