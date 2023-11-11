import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const selection = ["nothing", "Rock", "Paper", "Scissors"][count];
  return (
    <div className="App">
      <header className="App-header">
        <p>Pick one:</p>
        <p>
          <button type="button" onClick={() => setCount(1)}>
            Rock
          </button>
          <button type="button" onClick={() => setCount(2)}>
            Paper
          </button>
          <button type="button" onClick={() => setCount(3)}>
            Scissors
          </button>
        </p>
        <p>Selection: {selection}</p>
        <p>
          <button type="button" onClick={() => setCount(0)}>
            Reset
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
