import React, { useState, useEffect } from 'react';
import DesktopApp from './DesktopApp';
import CommandLine from './CommandLine';
import FileExplorer from './FileExplorer';

function Taskbar({ isCommandLineOpen, setIsCommandLineOpen, activeApp, setActiveApp, handleAppClick, isFileExplorerOpen, isFrankDeleted, setIsFrankDeleted  }) {
  const [time, setTime] = useState(new Date());

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
    {isFrankDeleted && isFileExplorerOpen && <FileExplorer setIsFrankDeleted={setIsFrankDeleted} isFrankDeleted={isFrankDeleted} onClose={() => handleAppClick('documents')}/>}
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
              isFrankDeleted={isFrankDeleted}
            />
          );
        })}
      </div>
      <div className="taskbar-apps"></div>
      <div className="taskbar-clock">{formattedTime}</div>

      {isCommandLineOpen && <CommandLine setIsFrankDeleted={setIsFrankDeleted} isFrankDeleted={isFrankDeleted} onClose={() => handleAppClick('cmd')} />}
    </div>
    </>

  );
}

export default Taskbar;
