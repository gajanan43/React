import React from 'react'

function Child(props) {
  return (
    <div>
      <input type="text" value={props.name} onChange={(e) => props.setName(e.target.value)} />
       <h1>Hello, {props.name}!</h1>
    </div>
  )
}

export default Child
