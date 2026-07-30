import { useState } from "react";
import "./App.css";

export default function App() {
  // State
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  // Increase counter
  const increase = () => setCount((prev) => prev + 1);

  // Decrease counter (minimum value = 0)
  const decrease = () => setCount((prev) => Math.max(prev - 1, 0));

  // Reset counter
  const reset = () => setCount(0);

  // Set counter to input value
  const setCounter = () => {
    setCount(countToSet);
    setCountToSet(0);
  };

  return (
    <div className="container">
      <h1>Counter</h1>

      <div className="card">
        Count is {count}
      </div>

      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="input-group">
        <input
          type="number"
          value={countToSet}
          onChange={(e) =>
            setCountToSet(
              e.target.value === "" ? 0 : Number(e.target.value)
            )
          }
        />

        <button onClick={setCounter}>
          Set Count
        </button>
      </div>
    </div>
  );
}