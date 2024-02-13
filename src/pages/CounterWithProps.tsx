// In the provided TestComponent, the prop initialCount is passed from the parent component and used to initialize the count state via useState(initialCount). Let's analyze the re-render behavior:
// 1. Initial Render: When TestComponent mounts or when the initialCount prop changes, React will execute the component function. During this initial render, useState(initialCount) will set the initial state value of count to the value of initialCount.
// 2. Subsequent Renders: If the initialCount prop changes after the initial render (due to a parent component re-render or an external update), React will re-render TestComponent with the new initialCount prop. Since the state initialization in useState only happens during the initial render, updating the initialCount prop won't directly update the count state. The count state will remain unchanged unless the component is unmounted and remounted.
// 3. Increment Button Click: When the increment button is clicked, the handleClick function is called, updating the count state by using the functional form of setCount (setCount((prev) => prev + 1)). This ensures that the update to count is based on the previous state and not the stale state value. This state update triggers a re-render of TestComponent, displaying the updated count value.




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
