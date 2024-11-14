import React from 'react';

function CommandLine({ onClose }) {
  return (
    <div className="command-line-window">
      <div className="command-line-header">
        <span>Command Line</span>
        <button onClick={onClose}>X</button>
      </div>
      <div class="command-line-content" id="cmdOutput">
      </div>  
      <div className="command-line-input">
        <input type="text" placeholder="Enter command..." />
      </div>
    </div>
  );
}

export default CommandLine;
