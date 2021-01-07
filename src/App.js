import React, { useState } from "react";
import './App.css';
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Seconds from "./components/Seconds";

function App() {
const [time, setTime] = useState({hour: 0, minute: 0, seconds: 0});
const [interv, setInterv] = useState();


const start = () => {
  run();
  setInterv(setInterval(run, 1000));
}
const stop = () => {
  clearInterval(interv);
  return setTime({hour: 0, minute: 0, seconds: 0});
}
const wait = () => {
  clearInterval(interv);
}
const reset = () => {
  clearInterval(interv);
  return setTime({hour: 0, minute: 0, seconds: 0});
}

let newHour = time.hour;
let newMin = time.minute;
let newSec = time.seconds;

const run = () => {
  if (newMin === 60) {
    newHour++;
    newMin = 0;
  }
  if (newSec === 60) {
    newMin++;
    newSec = 0;
  }
  newSec++;
  return setTime({hour: newHour, minute: newMin, seconds: newSec});
}

  return (
    <div className="container">
      <Header />
      <Seconds time={time} />
      <Buttons start={start} stop={stop} wait={wait} reset={reset} />
    </div>
  );
}

export default App;
