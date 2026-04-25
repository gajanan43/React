import React from 'react'

function Child2(props) {
  return (
    <div>
      <input type="text" value={props.name} onChange={(e) => props.setName(e.target.value)} />
      <p>Child2 Component: {props.name}</p>
    </div>
  )
}

export default Child2
