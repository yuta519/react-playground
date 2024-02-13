import { useState } from "react"
import TestComponent from "../components/CounterWithInitialCountAsProps"

export default function CounterWithProps () {
  const [state, setState] = useState<number>(0);

  const handleClick = () => setState((prev) => prev + 1);

  return (
    <>
      <div>Page Component State Count: {state}</div>
      <button onClick={handleClick}>click and increment</button>

      <TestComponent initialCount={state} />
    </>
)
}
