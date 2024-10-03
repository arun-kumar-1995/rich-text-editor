import React from "react";
import IconButton from "./IconButton";
import { MdOutlineShare } from "react-icons/md";
import { RxUnderline } from "react-icons/rx";
import { TbBold } from "react-icons/tb";
import { FiItalic } from "react-icons/fi";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { GoImage } from "react-icons/go";
import { GoStrikethrough } from "react-icons/go";
import { IoCodeOutline } from "react-icons/io5";

const EditorControl = () => {
  return (
    <>
      <IconButton title="bold" dataStyle="font-weight:bold" icon={TbBold} />
      <IconButton
        title="italic"
        dataStyle="font-style:italic"
        icon={FiItalic}
      />
      <IconButton
        title="strike"
        dataStyle="text-decoration:line-through"
        icon={GoStrikethrough}
      />

      <IconButton
        title="underline"
        dataStyle="text-decoration:underline"
        icon={RxUnderline}
      />
      <IconButton
        title="code"
        dataStyle="font-family:monospace"
        icon={IoCodeOutline}
      />
      <IconButton
        title="list style"
        dataStyle="list-style-type:decimal"
        icon={MdOutlineFormatListNumbered}
      />
      <IconButton
        title="bullet list"
        dataStyle="list-style-type:disc"
        icon={MdOutlineFormatListBulleted}
      />
      <IconButton title="bullet list" dataStyle="insert-image" icon={GoImage} />
      <IconButton
        title="bullet list"
        dataStyle="share-content"
        icon={MdOutlineShare}
      />
    </>
  );
};

export default EditorControl;
