import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count += 1);
    console.log(count)
  }

  const decrement = () => {
    setCount(count -= 1); 
  }  

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter