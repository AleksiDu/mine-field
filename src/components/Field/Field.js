import React, { useState } from "react";
import Cell from "../Cell/Cell";
import "./Field.css";

const Field = ({ height, width, mines }) => {
  const [xValue, setXValue] = useState();
  const [yValue, setYValue] = useState();
  const [nValue, setNValue] = useState(0);
  const [isMine, setIsMine] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFlagged, setIsFlagged] = useState(false);
  const [isUnknown, setIsUnknown] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const isEmpty = () => {
    return nValue === 0 && isMine;
  };

  const gridCell = (y, x, isMine) => {
    setYValue(y);
    setXValue(x);
    setIsMine(isMine);

    isEmpty();
  };

  const createNewField = (click = null) => {
    const grid = [];
    const rows = width;
    const columns = height;
    const minesCount = mines;
    const arrOfMines = randomMines(minesCount, columns.rows, click);

    for (let i = 0; i <= columns; i++) {
      grid.push([]);
      for (let j = 0; j <= rows; j++) {
        const gridCells = gridCell(i, j, arrOfMines.includes(i * rows + j));
        console.log("gridcells", gridCells);
        addGridCell(grid, gridCells);
      }
    }
  };

  const randomMines = (amount, columns, rows, starter = null) => {
    const arrOfMines = [];
    const limit = columns * rows;
    const minesPool = [...Array(limit).keys()];

    if (starter > 0 && starter < limit) {
      minesPool.splice(starter, 1);
    }

    for (let i = 0; i <= amount; i++) {
      const n = Math.floor(Math.random() * minesPool.length);
      arrOfMines.push(...minesPool.splice(n, 1));
    }
    return arrOfMines;
  };

  const addGridCell = (grid, gridCell) => {
    const y = grid.length - 1;
    const x = grid[y].length;
    const lastGridCell = gridCell;
    const around = getNearbyElement(grid, y, x);

    for (let nearByGridCell of around) {
      if (lastGridCell.isMine) {
        nearByGridCell.n += 1;
      } else if (nearByGridCell.isMine) {
        lastGridCell.n += 1;
      }
    }
    grid[y].push(gridCell);
  };

  const getNearbyElement = (grid, y, x) => {
    const around = [];
    const currentRow = grid[y];
    const prevRow = grid[y - 1];
    const nextRow = grid[y + 1];

    if (currentRow[x - 1]) around.push(currentRow[x - 1]);
    if (currentRow[x + 1]) around.push(currentRow[x + 1]);
    if (prevRow) {
      if (prevRow[x - 1]) around.push(prevRow[x - 1]);
      if (prevRow[x]) around.push(prevRow[x]);
      if (prevRow[x + 1]) around.push(prevRow[x + 1]);
    }
    if (nextRow) {
      if (nextRow[x - 1]) around.push(nextRow[x - 1]);
      if (nextRow[x]) around.push(nextRow[x]);
      if (nextRow[x + 1]) around.push(nextRow[x + 1]);
    }
    return around;
  };

  return (
    <div>
      <div className="mines-count">
        <span>Mines: {}</span>
      </div>
      <div className="grid" onContextMenu={(e) => e.preventDefault()}>
        <Cell
          isMine={isMine}
          isRevealed={isRevealed}
          isFlagged={isFlagged}
          isUnknown={isUnknown}
          isClicked={isClicked}
          isEmpty={isEmpty}
        />
      </div>
    </div>
  );
};

export default Field;
