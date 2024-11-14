import React, { useState, useEffect } from 'react';
import DesktopApp from './DesktopApp';

function Taskbar() {
  const [time, setTime] = useState(new Date());

  const apps = ['windowsce', 'cmd', 'firefox', 'bin', 'sizer', 'documents']

  useEffect(() => { 
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="taskbar">
      <div className="taskbar-start">

        {apps.map((app_name) =>{ 
            return <DesktopApp app_name={app_name} in_docker={true} isActive={false}/>
        })}
      </div>
      <div className="taskbar-apps">
      </div>
      <div className="taskbar-clock">{formattedTime}</div>
    </div>
  );
}

export default Taskbar;
