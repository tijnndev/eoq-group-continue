import { useState } from 'react'
import Taskbar from '../public/Taskbar'
import Desktop from '../public/Desktop'
import './App.css'

function App() {
  const [started, setStarted] = useState(false);
  const apps = ['firefox', 'bin', 'cmd', 'documents']

  const handleStart = () => {
    const sound = new Audio("start_sound.mp3");
    sound.play().catch(error => console.error("Audio play failed:", error));
    setStarted(true);
  };

  return (
    <>
      {started ? (
        <>
          <Desktop apps={apps} />
          <Taskbar apps={apps} />
        </>
      ) : (
        <div className="start-screen">
          <button onClick={handleStart}>Start App</button>
        </div>
      )}
    </>
  )
}

export default App
