import React, { memo } from "react";
const IconButton = memo(({ icon: Icon, title, onClick, dataStyle }) => {
  return (
    <section className="text-independent">
      <button
        className={dataStyle}
        title={title}
        onClick={onClick}
        data-style={dataStyle}
      >
        <Icon />
      </button>
    </section>
  );
});

export default IconButton;
