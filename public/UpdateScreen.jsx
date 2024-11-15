import React, { useState, useEffect } from 'react';

const UpdateScreen = () => {
  const [showUpdate, setShowUpdate] = useState(true);
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  
  function playSound(audioFile) {
    let sound = new Audio(audioFile);
    sound.volume = 1.0;
    sound.play();
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowUpdate(false);
      setShowBlackScreen(true);
      playSound("windowsearrape.mp3");
    }, 10000); 

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>

      {showUpdate && (
        <img className="franks-endscreen" src={`updatescreen.jpg`} />
      )}

      {showBlackScreen && (
        <div className="black-screen-parent">
          <img className="franks-endscreen" src={`blackscreen.jpg`} />
        </div>
      )}
    </>
  );
};

export default UpdateScreen;
