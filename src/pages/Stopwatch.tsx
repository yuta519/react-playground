// Create a stopwatch application through which users can start, pause and reset the timer. 
// Use React state, event handlers and the setTimeout or setInterval functions
// to manage the timer’s state and actions.

import { useRef, useState } from "react";


type State = {
  start?: number;
  now?: number;

}

export default function StopWatch() {
  const [state, update] = useState<State>({});
  const intervalId = useRef<number | null>(null);

  function start() {
    update((prev) => ({prev, start: Date.now()}));

    intervalId.current = setInterval(()=>{
      update((prev) => ({
        ...prev,
        now: Date.now(),
      }))
    }, 100);
  }

  function stop() {
    if (intervalId.current) clearInterval(intervalId.current);
  }


  function elapsed() {
    if (!state.now || !state.start) return null;
    return (state.now - state.start ) / 1000
  }
  
  return (
    <>
      <div>{elapsed() ?? "Stopwatch does not start"}</div>

      <div className="operation">
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
      </div>
    </>
  );
}