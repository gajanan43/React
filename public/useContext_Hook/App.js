import React, { createContext } from 'react'
import ChildA from './components/ChildA'
import ThemeContext from './ThemContext'

// const UserContext = createContext();
// const ThemeContext = createContext();

function App() {
    // const [user, setUser] = React.useState({ name: "John Doe" });
    const [theme, setTheme] = React.useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <div style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",}}>
            <ChildA />
        </div>
    </ThemeContext.Provider>

    // <UserContext.Provider value={{name: user.name}}>
    //   <ChildA />
    // </UserContext.Provider>
  )
}

export default App
// export { UserContext }
// export { ThemeContext }
