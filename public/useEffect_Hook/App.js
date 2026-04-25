import React from 'react'
import { useEffect, useState } from 'react';

function App() {

    const [count, setCount] = useState(0);

    // -------------CASE 1: No dependency array----------------
    // useEffect(() => {
    //     alert('Count has been updated: ');
    // });


    // -------------CASE 2: Empty dependency array----------------
    // useEffect(() => {
    //     alert('Count has been updated: ');
    // },[]);

    // -------------CASE 3: With count as dependency----------------
    // useEffect(() => {
    //     alert('Count has been updated: ' + count);
    // }, [count]);

    // -------------CASE 4: With count as dependency and cleanup function----------------
    useEffect(() => {
        alert('Count has been updated: ' + count);

        return () => {
            alert('Component will unmount or count will update: ' + count);
        }
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default App
