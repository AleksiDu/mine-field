import React from "react";
import Cell from "../Cell/Cell";
import "./Field.css";

const Field = ({ height, width, mines }) => {
  const createNewField = (click = null) => {
    const grid = [];
    const rows = width;
    const columns = height;
    const minesCount = mines;
    const arrOfMines = randomMines(minesCount, columns.rows, click);

    for (let i = 0; i <= columns; i++) {
      grid.push([]);
      for (let j = 0; j <= rows; j++) {
        const gridCell = new GridCell(i, j, arrOfMines.includes(i * rows + j));
        addGridCell(grid, gridCell);
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
        <Cell />
      </div>
    </div>
  );
};

class GridCell {
  constructor(y, x, isMine) {
    this.x = x;
    this.y = y;
    this.n = 0;
    this.isMine = isMine;
    this.isRevealed = false;
    this.isFlagged = false;
    this.isUnknown = false;
    this.isClicked = false;
  }
  get isEmpty() {
    return this.n === 0 && !this.isMine;
  }
}

export default Field;
