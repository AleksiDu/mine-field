import "./Game.css";
import Field from "../Field/Field";

function Game({ height, width, mines, status }) {
  const handleChange = () => {
    console.log("handle Change");
  };

  const handleChangeHeight = () => {
    console.log("height");
  };

  const handleChangeWidth = () => {
    console.log("width");
  };

  const handleChangeMines = () => {
    console.log("mines");
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
}

export default Game;
