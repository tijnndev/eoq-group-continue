import React from 'react';
import DesktopApp from './DesktopApp';
import { useState, useEffect } from 'react';
import CommandLine from './CommandLine';

function Desktop({ apps, isCommandLineOpen, onCloseCommandLine }) {
  const [backgroundPicture, setBackgroundPicture] = useState('default_bg');
  useEffect(() => {
    setBackgroundPicture('default_bg');
  }, []);
  isCommandLineOpen = false
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  const background_style = {
    position: 'absolute',
    height: '100dvh',
    width: '100dvw',
    top: 0,
    left: 0,
    zIndex: '-1',
  };

  return (
    <div className="Desktop">
      {apps.map((app_name) => {
        return <DesktopApp key={app_name} app_name={app_name} in_docker={false} isActive={false} />;
      })}

      <img onDragStart={preventDragHandler} style={background_style} src={`/public/${backgroundPicture}.jpg`} alt="" />
      
      {isCommandLineOpen && <CommandLine onClose={onCloseCommandLine} />}
    </div>
  );
}

export default Desktop;
