import React from 'react'
import App from '../src/App'
import DesktopApp from './DesktopApp'
import CommandLine from './CommandLine'
import FileExplorer from './FileExplorer'
import { useState, useEffect } from 'react'
function Desktop({ apps }) {
    const [backgroundPicture, setBackgroundPicture] = useState('default_bg')
    const [isCommandLineOpen, setIsCommandLineOpen] = useState(false);
    const [activeApp, setActiveApp] = useState(null);

    useEffect(() => {
        setBackgroundPicture('default_bg')
    })

    const handleAppClick = (appName) => {
        if (appName === "cmd") {
          handleCommandLineToggle();
        }
        setActiveApp(prevState => prevState === appName ? null : appName);
    };
    
      const handleCommandLineToggle = () => {
        setIsCommandLineOpen(prevState => !prevState);
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
      <FileExplorer />
      <div className="Desktop">
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
          {isCommandLineOpen && <CommandLine onClose={() => handleAppClick('cmd')} />}
      </div>
    </>
  )
}

export default Desktop