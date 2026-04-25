import React, { useRef } from 'react'
import { useEffect } from 'react';

function App() {

  const [count, setCount] = React.useState(0)
  let val= useRef(0);
  let btnRef = useRef(null);


  const handleIncrementClick = () => {
    val.current = val.current+1;
    setCount(count + 1);
    console.log('Count has been updated:', val.current);
  }

  const changeColor = () => {
    btnRef.current.style.backgroundColor = 'red';
  }

  useEffect(() => {
    console.log('Component has been rendered');
  })

  return (
    <div>
      <br />
      <br />
      <button onClick={handleIncrementClick} ref={btnRef}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={changeColor} >
        Change the Color
      </button>
      <br />
      <br />
      <p>Counter: {count}</p>
      <br />
    </div>
  )
}

export default App
