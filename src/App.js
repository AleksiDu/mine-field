import Game from "./components/Game/Game";
import { useState } from "react";

function App() {
  const [height, setHeight] = useState(8);
  const [width, setWidth] = useState(8);
  const [mines, setMines] = useState(10);
  const [status, setStatus] = useState(0);

  return (
    <div className="app">
      <Game height={height} width={width} mines={mines} status={status} />
    </div>
  );
}

export default App;
