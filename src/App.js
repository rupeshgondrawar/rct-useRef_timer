import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);

  const startTimer = () => {
    // if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return function () {
      clearInterval(timer);
    };
  };

  const stopTimer = () => {
    clearInterval(ref.current);
  };
  // console.log(ref);

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <div className="App">
      <h1> timer : {timer}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
