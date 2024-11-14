import { useState } from 'react'
import Taskbar from '../public/Taskbar'
import Desktop from '../public/Desktop'
import './App.css'

function App() {
  const apps = ['firefox', 'bin', 'cmd', 'sizer', 'documents']

  return (
    <>
      <Desktop apps={apps} />
      <Taskbar apps={apps}/>
    </>
  )
}

export default App
