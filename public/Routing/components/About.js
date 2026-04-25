import React from 'react'
import {useNavigate} from 'react-router-dom'

function About() {

  const navigate = useNavigate();

  const handle = () => {
    navigate("/");
  }

  return (
    <div>
      About
      <button onClick={handle}>Move to Home page</button>
    </div>
  )
}

export default About
