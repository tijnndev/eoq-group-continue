import React from 'react'
import DesktopApp from './DesktopApp'
import { useState, useEffect } from 'react'
function Desktop({ apps }) {
    const [backgroundPicture, setBackgroundPicture] = useState('default_bg')
    const [activeApp, setActiveApp] = useState(null);
    const [isFrankDeleted, setIsFrankDeleted] = useState(false)
    const [isFileExplorerOpen, setIsFileExplorerOpen] = useState(false)

    useEffect(() => {
        setBackgroundPicture('default_bg')
    })

    const handleAppClick = (appName) => {
        setActiveApp(prevState => prevState === appName ? null : appName);
    };

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
    <>
      <div  className="Desktop">
          {apps.map((app_name) => (
              <DesktopApp
                  key={app_name}
                  app_name={app_name}
                  in_docker={false}
                  isActive={activeApp === app_name}
                  onClick={() => handleAppClick(app_name)}
              />
          ))}
          <img onDragStart={preventDragHandler} style={background_style} src={`${backgroundPicture}.jpg`} alt="background" />
      </div>
    </>
  )
}

export default Desktop