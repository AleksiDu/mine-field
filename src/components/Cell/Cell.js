import React from "react";

const Cell = () => {
  const cellBtnStyle = "cell";
  //TODO cell BtnStyle will add styles depend of btn condition

  // ? 💣 and 🚩 for flag and bomb

  return (
    <div>
      <button className={cellBtnStyle}>Cell</button>
    </div>
  );
};

export default Cell;
