import React from 'react'
import { useMemo } from 'react';

function App() {
    const [count, setCount] = React.useState(0)
    const [inputValue, setInputValue] = React.useState(0);

    const handleIncrementClick = () => {
        setCount(count + 1);
    }

    const expensiveTask = (num) => {
        for (let i = 0; i < 1000000000; i++) {}
        
        return num * 2;
    }

    let result = useMemo(() => expensiveTask(inputValue), [inputValue])

    return (
        <div>
            <br />
            <br />
            <button onClick={handleIncrementClick}>Increment</button>
            <br />
            <br />
            <p>Counter: {count}</p>
            <br />
            <br />
            <input type="number" placeholder='Enter a number' onChange={(e)=>setInputValue(Number(e.target.value))}/>
            <br />
            <br />
            <p>Input Value: {result}</p>
        </div>
    )
}

export default App
