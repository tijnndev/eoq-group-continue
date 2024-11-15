import { useState } from 'react'
import Taskbar from '../public/Taskbar'
import Desktop from '../public/Desktop'
import './App.css'
import LoginScreen from '../public/LoginScreen'

function App() {
  const apps = ['firefox', 'bin', 'cmd', 'documents']
  const [activeApp, setActiveApp] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false)
  const [isFileExplorerOpen, setIsFileExplorerOpen] = useState(false)
  const [isCommandLineOpen, setIsCommandLineOpen] = useState(false);
  const [canExecuteKillCommand, setExecuteKillCommand] = useState(false);
  const [isFrankDeleted, setIsFrankDeleted] = useState(true)
  const [isMalwareRemoved, setIsMalwareRemoved] = useState(false)

  const handleAppClick = (appName) => {
    if (appName === "cmd") {
      handleCommandLineToggle();
      setActiveApp((prevState) => (prevState === appName ? null : appName));
    } else if (appName === "documents" && isFrankDeleted) {
      setIsFileExplorerOpen((prevState) => !prevState);
      setActiveApp((prevState) => (prevState === appName ? null : appName));
    } else if(appName !== "documents"){
      setActiveApp((prevState) => (prevState === appName ? null : appName));
    }
  };

  const handleCommandLineToggle = () => {
    setIsCommandLineOpen((prevState) => !prevState);
  };
  return (
    loggedIn? 
    <>
    <Desktop apps={apps} isCommandLineOpen={isCommandLineOpen} setIsCommandLineOpen={setIsCommandLineOpen} activeApp={activeApp} setActiveApp={setActiveApp} handleAppClick={handleAppClick} isFileExplorerOpen={isFileExplorerOpen} isFrankDeleted={isFrankDeleted} setIsFrankDeleted={setIsFrankDeleted} />
    <Taskbar apps={apps} isCommandLineOpen={isCommandLineOpen} setIsCommandLineOpen={setIsCommandLineOpen} activeApp={activeApp} setActiveApp={setActiveApp} handleAppClick={handleAppClick} isFileExplorerOpen={isFileExplorerOpen} isFrankDeleted={isFrankDeleted} setIsFrankDeleted={setIsFrankDeleted} canExecuteKillCommand={canExecuteKillCommand} setExecuteKillCommand={setExecuteKillCommand} isMalwareRemoved={isMalwareRemoved} setIsMalwareRemoved={setIsMalwareRemoved} />
  </>
  :<>
     <LoginScreen setLoggedIn={setLoggedIn}/>
   </>
  )
}

export default App
