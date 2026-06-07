import {useState} from "react";

import "./App.css";

export default function App() {
  const[] = useState(0);
  return (
    <>
      <div className="container">
        <h1>Counter</h1>

        <div className="card">Count is 20</div>

        <div className="buttons">
          <button>Increase</button>
          <button>Decrease</button>
          <button>Reset</button>
        </div>

        <div className="input-group">
          <input type="text" value="8" onChange={() => {}} />
          <button>Set to 8</button>
        </div>
      </div>
    </>
  );
}
