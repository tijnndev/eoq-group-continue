import React from 'react'
import App from '../src/App'
import DesktopApp from './DesktopApp'
import { useState, useEffect } from 'react'
function Desktop() {
    const [backgroundPicture, setBackgroundPicture] = useState('default_bg')
    useEffect(() => {
        setBackgroundPicture('default_bg')
    })

  return (
    <div className='Desktop'>
        <img src={`/public/${backgroundPicture}.jpg`} alt="" />
        <DesktopApp 
            app_name='firefox'
            in_docker={false}
            />
    </div>
  )
}

export default Desktop