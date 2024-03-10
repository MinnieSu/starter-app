import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello World!</h1>
        <p>Click below to give me a high five!! </p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            {" "}
            We've high fived {count} times
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
