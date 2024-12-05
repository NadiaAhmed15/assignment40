import React, { useState, useEffect } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button onClick={() => setIsRunning(true)} disabled={isRunning} className="button-start">
        Start
      </button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning} className="button-stop">
        Stop
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

export default App;
