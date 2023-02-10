import React from "react";
import Cell from "../Cell/Cell";

const Field = () => {
  let minesCount = 0;

  return (
    <div>
      <div className="mines-count">
        <span>Mines: {minesCount}</span>
      </div>
      <div className="grid" onContextMenu={(e) => e.preventDefault()}>
        <Cell />
      </div>
    </div>
  );
};

export default Field;
