import React, { useState } from "react";
import "./Cell.css";

const Cell = ({
  isMine,
  isRevealed,
  isFlagged,
  isUnknown,
  isClicked,
  isEmpty,
}) => {
  const [icon, setIcon] = useState("Cell");

  const cellBtnStyle =
    "cell" +
    (isRevealed ? "" : " hidden") +
    (isMine ? " is-mine" : "") +
    (isClicked ? " is-clicked" : "") +
    (isEmpty ? " is-unknown" : "") +
    (isFlagged ? " is-flag" : "");

  const getValue = () => {
    if (!isRevealed) {
      return isFlagged ? "🚩" : null;
    } else if (isMine) {
      return "💣";
    } else if (isEmpty) {
      return "";
    }
  };

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
      {getValue()}
    </div>
  );
};

export default Cell;
