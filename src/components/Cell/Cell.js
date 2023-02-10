import React, { useState } from "react";
import "./Cell.css";

const Cell = () => {
  const [icon, setIcon] = useState("Cell");

  const cellBtnStyle = "cell";
  //TODO cell BtnStyle will add styles depend of btn condition
  // ? 💣 and 🚩 for flag and bomb
  const handleClick = (e) => {
    e.nativeEvent.button === 2 ? setIcon("💣") : setIcon("🚩");
  };

  return (
    <div>
      <input
        type="checkbox"
        className={cellBtnStyle}
        onClick={handleClick}
        onContextMenu={handleClick}
      />
    </div>
  );
};

export default Cell;
