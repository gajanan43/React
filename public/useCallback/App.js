import React from 'react'
import Child from './components/Child';

function App() {
    const [count, setCount] = React.useState(0);

    const handleIncrementClick  = React.useCallback(() => {
        setCount(count + 1);
    }, [count]);


    return (
        <div>
            <br />
            <br />
            <div  >
            <button onClick={handleIncrementClick}>Increment</button>
            </div>
            <br />
            <br />
            <p>Counter: {count}</p>
            <br />
            <br />

            <Child name="click me" 
            handleIncrementClick={handleIncrementClick}/>
        </div>

    )
}

export default App
