import React, { useState } from 'react';


function App() {
 let testOut = function increase() {
    console.log ("it is working!");
  }

  
  
  return (
    <div>
      <div>0</div>
    <button onClick={testOut}>Increment</button>
    <button>Decrement</button>
      <p>Hello World!</p>
    </div>
  )
}

export default App
