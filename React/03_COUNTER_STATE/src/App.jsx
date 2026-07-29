import { useState } from "react";

import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);
  // count = count + 1;     Don't use this

  // const incrementHandler = (numVal) => {
  //   // setCount(numVal + 1);  Short hand notation
  //   setCount((prev) => prev + numVal + 1);
  //   setCount((prev) => prev + 1);
  // }

  return (
    <>
      <div className="container">
        <h1>Counter</h1>

        <div className="card">Count is {count}</div>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount((count) => Math.max(count - 1, 0))}>
            Decrease
          </button>
          <button onClick={() => setCount((count) => 0)}>Reset</button>
        </div>

        <div className="input-group">
          <input
            type="text"
            value="{countToSet}"
            onChange={(e) => setCountToSet(Number(e.target.value))}
          />
          <button
          onClick = {() => {setCount(Number(countToSet))
          setCountToSet(0);

          }}
          >Set to {countToSet}</button>
        </div>
      </div>
    </>
  );
}
