import "./styles.css";

import Game from "../src/components/Game";
import { useGameStats } from "./hooks/useGameStats";

export default function App() {
  const [gameStats, addLinesCleared] = useGameStats();
  console.log(gameStats.linesCompleted);
  return (
    <div className="App">
      <Game rows={20} columns={10} />
    </div>
  );
}
