import React, { useState } from "react";
import "./Cell.css";

const Cell = (props) => {
  const [icon, setIcon] = useState("Cell");

  const cellBtnStyle = "cell";

  console.log("props of cell", props.value);

  //TODO cell BtnStyle will add styles depend of btn condition
  // ? 💣 and 🚩 for flag and bomb
  const handleClick = (e) => {
    e.nativeEvent.button === 2 ? setIcon("💣") : setIcon("🚩");
  };

  return (
    <div className={cellBtnStyle}>
      <input
        type="checkbox"
        onClick={handleClick}
        onContextMenu={handleClick}
      />
    </div>
  );
};

export default Cell;
