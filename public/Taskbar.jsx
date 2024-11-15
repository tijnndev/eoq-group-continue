import React, { useState, useEffect } from "react";
import DesktopApp from "./DesktopApp";
import CommandLine from "./CommandLine";
import FileExplorer from "./FileExplorer";

function Taskbar() {
  const [time, setTime] = useState(new Date());
  const [activeApp, setActiveApp] = useState(null);
  const [isCommandLineOpen, setIsCommandLineOpen] = useState(false);
  const [isFrankDeleted, setIsFrankDeleted] = useState(false);
  const [commandLine2, setCommandLine2] = useState(false);
  const [isFileExplorerOpen, setIsFileExplorerOpen] = useState(false);

  const apps = ["windowsce", "cmd", "firefox", "bin", "documents"];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleAppClick = (appName) => {
    if (appName === "cmd") {
      handleCommandLineToggle();
    } else if (appName === "documents") {
      setIsFileExplorerOpen((prevState) => !prevState);
    }
    setActiveApp((prevState) => (prevState === appName ? null : appName));
  };

  const handleCommandLineToggle = () => {
    setIsCommandLineOpen((prevState) => !prevState);
  };

  return (
    <>
      {isFrankDeleted && isFileExplorerOpen && <FileExplorer />}
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

        {isCommandLineOpen && (
          <>
            {commandLine2 ? (
              <secondCommandLine
                setIsFrankDeleted={setIsFrankDeleted}
                onClose={() => handleAppClick("cmd")}
              />
            ) : (
              <CommandLine
                setIsFrankDeleted={setIsFrankDeleted}
                onClose={() => handleAppClick("cmd")}
                SetCommandLine2={setCommandLine2}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Taskbar;
