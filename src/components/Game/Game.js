import React, { useState, useRef } from "react";
import Field from "../Field/Field";

import "./Game.css";

const Game = () => {
  const [height, setHeight] = useState(8);
  const [width, setWidth] = useState(8);
  const [mines, setMines] = useState(10);
  const [gameStatus, setGameStatus] = useState(0);

  const boardElement = useRef();

  const handleChangeHeight = (event) => {
    const val = clamp(event.target.value, 5, 18);
    setHeight(val);
  };

  const handleChangeWidth = (event) => {
    const val = clamp(event.target.value, 5, 18);
    setWidth(val);
  };

  const handleChangeMines = (event) => {
    const cap = Math.floor((height * width) / 3);
    const val = clamp(event.target.value, 1, cap);
    setMines(val);
  };

  const restartGame = () => {
    boardElement.current.restartBoard();
  };

  return (
    <div className="game">
      <Field
        ref={boardElement}
        height={height}
        width={width}
        mines={mines}
        status={gameStatus}
      />
      <div className="control-buttons">
        <button onClick={restartGame}>Restart</button>

        <form>
          <label>Height</label>
          <input type="number" value={height} onChange={handleChangeHeight} />
          <label>Width</label>
          <input type="number" value={width} onChange={handleChangeWidth} />
          <label>Mines</label>
          <input type="number" value={mines} onChange={handleChangeMines} />
        </form>
      </div>
    </div>
  );
};

function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}

export default Game;
