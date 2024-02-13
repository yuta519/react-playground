// https://kinsta.com/knowledgebase/react-hook-useeffect-has-a-missing-dependency/ 
// 
// This is because, in JavaScript, objects and arrays are compared by reference 
// and point to a different location in memory every time — its value will change on every render,
// causing an infinite re-render loop.

import { useEffect, useMemo, useState } from "react";

export default function InfiniteLoop() {
  const [_, setUser] = useState({});

  // 👇️this will change on every render
  // let newUser = { name: 'Jane', age: 28 };

  // 👌 Should use memorization, instead of the above code
  let newUser = useMemo(() => ({ name: 'Jane', age: 28 }), []);
  
  useEffect(() => {
    setUser(newUser);
  }, [newUser]);
  
  return (
    <div>
    <h1>Hello World</h1>
    </div>
  );
}
