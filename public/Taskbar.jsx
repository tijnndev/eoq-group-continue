import React, { useState, useEffect } from 'react';
import DesktopApp from './DesktopApp';
import CommandLine from './CommandLine';

function Taskbar() {
  const [time, setTime] = useState(new Date());
  const [activeApp, setActiveApp] = useState(null);
  const [isCommandLineOpen, setIsCommandLineOpen] = useState(false);

  const apps = ['windowsce', 'cmd', 'firefox', 'bin', 'sizer', 'documents'];

  useEffect(() => { 
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleAppClick = (appName) => {
    if(appName == "cmd") {
        handleCommandLineClick()
    }
    setActiveApp(appName);
  };

  const handleCommandLineClick = () => {
    setIsCommandLineOpen(true);
  };

  const handleCommandLineClose = () => {
    setIsCommandLineOpen(false);
  };

  return (
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

      {isCommandLineOpen && <CommandLine onClose={handleCommandLineClose} />}
    </div>
  );
}

export default Taskbar;
