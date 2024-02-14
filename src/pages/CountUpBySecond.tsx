import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
	  const interval = setInterval(() => {
    	setCount((prevCount) => prevCount + 1);
	  }, 1000);
    // StrictMode renders components twice (on dev but not production) 
    // in order to detect any problems with your code 
    // and warn you about them (which can be quite useful). 
    // https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode/61897567#61897567
    // 
    // So when remove the below line and run app with development, the count increment by 2.
	  return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}

export default App
