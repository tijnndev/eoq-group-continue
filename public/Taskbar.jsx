import React, { useState, useEffect } from 'react';
import DesktopApp from './DesktopApp';

function Taskbar() {
  const [time, setTime] = useState(new Date());

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
        <DesktopApp 
            app_name='windowsce'
            in_docker={true}
            isActive={true}
            />
        <DesktopApp 
            app_name='cmd'
            in_docker={true}
            isActive={false}
            />
      </div>
      <div className="taskbar-apps">
      </div>
      <div className="taskbar-clock">{formattedTime}</div>
    </div>
  );
}

export default Taskbar;
