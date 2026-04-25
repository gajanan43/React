import React from 'react'
import { useContext } from 'react'
// import { UserContext } from '../App'
// import { ThemeContext } from '../App'
import ThemeContext from '../ThemContext'

function ChildC() {
//   const  user = useContext(UserContext);
const { theme, setTheme } = useContext(ThemeContext);

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

  return (
    <div>
        <p>Current theme: {theme}</p>
        <button onClick={handleClick}>Toggle Theme</button>
    </div>
    // <div>
    //   <p>{user.name}</p>
    // </div>
  )
}

export default ChildC
