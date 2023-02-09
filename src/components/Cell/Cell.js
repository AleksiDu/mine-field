import React, { useState } from "react";

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
      <button
        className={cellBtnStyle}
        onClick={handleClick}
        onContextMenu={handleClick}
      >
        {icon}
      </button>
    </div>
  );
};

export default Cell;
