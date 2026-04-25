import React from 'react'

function Child1(props) {
  return (
    <div>
      <input type="text" value={props.name} onChange={(e) => props.setName(e.target.value)} />
      <p>Child1 Component: {props.name}</p>
    </div>
  )
}

export default Child1
