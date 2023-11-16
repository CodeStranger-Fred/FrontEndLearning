import { useState } from "react";

import "./App.css";
import Reorder from "./Reorder";

function App() {
  const [count, setCount] = useState(0);
  const onReorder = () => setCount(count + 5);

  return (
    <>
      <h1>Inventory</h1>
      <div className="card">
        <p className="card__p">Count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button
          onClick={() => setCount((count) => count - 1)}
          disabled={!count}
        >
          -
        </button>
        {!count && <Reorder onReorder={onReorder} />}
      </div>
    </>
  );
}

export default App;
