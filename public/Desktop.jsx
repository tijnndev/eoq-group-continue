import React from 'react'
import App from '../src/App'
import DesktopApp from './DesktopApp'
import { useState, useEffect } from 'react'
function Desktop({ apps }) {
    const [backgroundPicture, setBackgroundPicture] = useState('default_bg')
    useEffect(() => {
        setBackgroundPicture('default_bg')
    })

    const preventDragHandler = (e) => {
        e.preventDefault();
      }
      
    const background_style = {
        position: 'absolute',
        height: '100dvh',
        width: '100dvw',
        top: 0,
        left: 0,
        zIndex: '-1' 

    }

  return (
    <div className='Desktop'>
        {apps.map((app_name) =>{ 
            return <DesktopApp app_name={app_name} in_docker={false} isActive={false}/>
        })}

        <img onDragStart={preventDragHandler} style={background_style} src={`/public/${backgroundPicture}.jpg`} alt="" />
    </div>
  )
}

export default Desktop