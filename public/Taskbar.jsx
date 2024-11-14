import React, { useState, useEffect } from 'react';

function Taskbar() {


  return (
    <div className="taskbar">
      <div className="taskbar-start">
        <button className="start-button">Start</button>
      </div>
      <div className="taskbar-apps">
        <div className="app-icon">App 1</div>
        <div className="app-icon">App 2</div>
      </div>
    </div>
  );
}

export default Taskbar;
