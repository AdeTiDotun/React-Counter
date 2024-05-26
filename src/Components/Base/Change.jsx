import React, { useState } from "react";
import './index.css'

function Changes() {
  const [count, setCount] = useState(0);

  const changeIncrement = () => {
    setCount(count + 1);
  };
  const changeDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={changeIncrement}>Increase</button>
      <button onClick={changeDecrement}>Decrease</button>
    </>
  );
}

export default Changes;
