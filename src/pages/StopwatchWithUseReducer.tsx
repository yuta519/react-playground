// // Create a stopwatch application through which users can start, pause and reset the timer. 
// // Use React state, event handlers and the setTimeout or setInterval functions
// // to manage the timer’s state and actions.

import { useReducer, useRef } from "react";

type State = {
  start: number;
  end: number;
}

type Action = { type: "START" | "STOP" | "RESET"; } 

function reducer(state: State, action: Action) {
  switch(action.type){
    case("START"):
      return { ...state, start: Date.now()};
    case("STOP"):
      return { ...state, end: Date.now()};
    case("RESET"):
      return { start: 0, end: 0 };
  }
}


export default function StopWatch() {
  const [{start, end}, dispatch] = useReducer(reducer, {start: 0, end: 0});
  const intervalId = useRef<number | null>(null);

  const startWatch = () => {
    dispatch({type: "START"})
    intervalId.current = setInterval(() => dispatch({type: "STOP"}), 100);
  }
  const stopWatch = () => intervalId.current && clearInterval(intervalId.current);
  const resetWatch = () => {
    stopWatch()
    dispatch({type:"RESET"});
  }

  return (
    <>
      <h2>{(end - start) > 0 ? (end - start) / 1000 : 0}</h2>
      <button onClick={startWatch}>start</button>
      <button onClick={stopWatch}>stop</button>
      <button onClick={resetWatch}>Reset</button>
    </>
  );
}
