import React from 'react'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);



    if(isLoggedIn) {
      return(
        <LoginBtn/>
      )
    }

      return(
        <>
        <p>Welcome to the page</p>
        {!isLoggedIn && <LogoutBtn/>}
        </>

      )
      // return(
        
      //   <>{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}</>
        
      // )

  
      // if(isLoggedIn) {
      //   return(
      //     <LogoutBtn />
      //   )
      // } else {
      //   return(
      //     <LoginBtn />
      //   )
      // }
   

}

export default App
