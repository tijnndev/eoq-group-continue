import React, { useState, useEffect } from 'react';
import DesktopApp from './DesktopApp';
import CommandLine from './CommandLine';
import FileExplorer from './FileExplorer';

function Taskbar({ isCommandLineOpen, setIsCommandLineOpen, activeApp, setActiveApp, handleAppClick, isFileExplorerOpen  }) {
  const [time, setTime] = useState(new Date());
  const [isFrankDeleted, setIsFrankDeleted] = useState(true)

  const apps = ['windowsce', 'cmd', 'firefox', 'bin', 'documents'];

  useEffect(() => { 
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
    {isFrankDeleted && isFileExplorerOpen && <FileExplorer onClose={() => handleAppClick('documents')}/>}
    <div className="taskbar">
      <div className="taskbar-start">
        {apps.map((app_name) => {
          return (
            <DesktopApp 
              key={app_name}
              app_name={app_name} 
              in_docker={true} 
              isActive={activeApp === app_name} 
              onClick={() => handleAppClick(app_name)} 
            />
          );
        })}
      </div>
      <div className="taskbar-apps"></div>
      <div className="taskbar-clock">{formattedTime}</div>

      {isCommandLineOpen && <CommandLine setIsFrankDeleted={setIsFrankDeleted} onClose={() => handleAppClick('cmd')} />}
    </div>
    </>

  );
}

export default Taskbar;
