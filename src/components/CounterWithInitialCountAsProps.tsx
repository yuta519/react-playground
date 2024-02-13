import { useState } from "react";

type Props = {
 initialCount: number
}

export default function TestComponent({initialCount}: Props) {
    const [count, setCount] = useState(initialCount);
    const handleClick = () => {
      // setCount(count + 1);
      setCount((prev) => prev + 1);
    };
   return (
      <div>
        <p>props: {initialCount}</p>
        <p>Child Component State Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }