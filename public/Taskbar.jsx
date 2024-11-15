import React, { useState, useEffect } from "react";
import DesktopApp from "./DesktopApp";
import CommandLine from "./CommandLine";
import FileExplorer from "./FileExplorer";
import NewCommandLine from "./secondCommandline";

function Taskbar({ isCommandLineOpen, setIsCommandLineOpen, activeApp, setActiveApp, handleAppClick, isFileExplorerOpen, isFrankDeleted, setIsFrankDeleted, canExecuteKillCommand, setExecuteKillCommand, isMalwareRemoved, setIsMalwareRemoved }) {
  const [time, setTime] = useState(new Date());
  const [commandLine2, setCommandLine2] = useState(false);
  const [showUpdateScreen, setShowUpdateScreen] = useState(false);

  const apps = ["windowsce", "cmd", "firefox", "bin", "documents"];
  function UpdateScreen() {
    setShowUpdateScreen(true);
    setTimeout(() => {
      setShowUpdateScreen(false);
      setIsMalwareRemoved(true)
    }, 15000);
  }
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>

      {showUpdateScreen && <UpdateScreen />}
      {isFrankDeleted && isFileExplorerOpen && <FileExplorer onClose={() => handleAppClick("documents")} isFrankDeleted={isFrankDeleted} isMalwareRemoved={isMalwareRemoved} setIsMalwareRemoved={setIsMalwareRemoved}/>}
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

        {isCommandLineOpen && (
          <>
            {commandLine2 ? (
              <NewCommandLine setIsFrankDeleted={setIsFrankDeleted}
              onClose={() => handleAppClick("cmd")}/>
            ) : (
              <CommandLine
                setIsFrankDeleted={setIsFrankDeleted}
                onClose={() => handleAppClick("cmd")}
                SetCommandLine2={setCommandLine2}
                isFrankDeleted={isFrankDeleted}
                canExecuteKillCommand={canExecuteKillCommand}
                setExecuteKillCommand={setExecuteKillCommand}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Taskbar;
