import { useState } from "react";
import "./Game.css";
import Field from "../Field/Field";

const Game = () => {
  const [height, setHeight] = useState(8);
  const [width, setWidth] = useState(8);
  const [mines, setMines] = useState(10);
  const [status, setStatus] = useState(0);

  const handleChangeHeight = (e) => {
    const val = clamp(e.target.value, 5, 18);
    setHeight(val);
    console.log("Height set to:", val);
  };

  const handleChangeWidth = (e) => {
    const val = clamp(e.target.value, 5, 18);
    setWidth(val);
    console.log("Width set to:", val);
  };

  const handleChangeMines = (e) => {
    const cap = Math.floor((height * width) / 3);
    const val = clamp(e.target.value, 1, cap);
    setMines(val);
    console.log("Mines set to:", val);
  };

  const restartGame = () => {
    console.log("Restart Game");
  };

  return (
    <div className="Game">
      <Field height={height} width={width} mines={mines} status={status} />
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
