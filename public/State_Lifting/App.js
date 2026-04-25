import React from 'react'
// import Child from './components/Child'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import { useState } from 'react'

function App() {
    const [name, setName] = useState('')
  return (
    <div>
      {/* <Child name={name} setName={setName} />
      <p>Parent Component: {name}</p> */}

    
      <Child1 name={name} setName={setName} />
      <Child2 name={name} setName={setName} />
      
    </div>
  )
}

export default App
