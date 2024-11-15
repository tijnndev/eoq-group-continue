import { useState } from 'react'
import Taskbar from '../public/Taskbar'
import Desktop from '../public/Desktop'
import './App.css'
import LoginScreen from '../public/LoginScreen'

function App() {
  const apps = ['firefox', 'bin', 'cmd', 'documents']
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    // loggedIn? 
    <>
    <Desktop apps={apps} />
    <Taskbar apps={apps}/>
  </>
  // :<>
    //  <LoginScreen setLoggedIn={setLoggedIn}/>
  //  </>
  )
}

export default App
