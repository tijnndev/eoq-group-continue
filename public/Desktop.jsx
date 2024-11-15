import React, { useState, useEffect } from "react";
import DesktopApp from "./DesktopApp";
import UpdateScreen from "./UpdateScreen";

function Desktop({ apps, isCommandLineOpen, setIsCommandLineOpen, activeApp, setActiveApp, handleAppClick, isFileExplorerOpen, isFrankDeleted, isMalwareRemoved, setIsMalwareRemoved }) {
  const [backgroundPicture, setBackgroundPicture] = useState("default_bg");

  useEffect(() => {
    setBackgroundPicture("default_bg");
  }, []);

  
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  const background_style = {
    position: "absolute",
    height: "100dvh",
    width: "100dvw",
    top: 0,
    left: 0,
    zIndex: "-1",
  };

  return (
    <>

      <div className="Desktop">
        {apps.map((app_name) => (
          <DesktopApp
            key={app_name}
            app_name={app_name}
            in_docker={false}
            isActive={activeApp === app_name}
            onClick={() => handleAppClick(app_name)}
            isFrankDeleted={isFrankDeleted}
          />
        ))}
        <img
          onDragStart={preventDragHandler}
          style={background_style}
          src={`${backgroundPicture}.jpg`}
          alt="background"
        />
      </div>
    </>
  );
}

export default Desktop;
