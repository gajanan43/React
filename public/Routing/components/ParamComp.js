import React from 'react'
import { useParams } from 'react-router-dom'

function ParamComp() {
    const {id} = useParams();
  return (
    <div>
      <h1>Student ID: {id}</h1>
    </div>
  )
}

export default ParamComp
