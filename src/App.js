import "./styles.css";

import Game from "../src/components/Game";
import Message from "./components/Message";

import { useState } from "react";

export default function App() {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="App">
      {completed ? (
        <Message />
      ) : (
        <Game setCompleted={setCompleted} rows={20} columns={10} />
      )}
    </div>
  );
}
