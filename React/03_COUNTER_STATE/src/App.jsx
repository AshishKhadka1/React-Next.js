import { useState } from "react";

import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
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
          <button onClick={() => {}}>Decrease</button>
          <button onClick={() => {}}>Reset</button>
        </div>

        <div className="input-group">
          <input type="text" value="8" onChange={() => {}} />
          <button>Set to 8</button>
        </div>
      </div>
    </>
  );
}
