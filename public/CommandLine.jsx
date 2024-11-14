import React, { useState } from 'react';

function CommandLine({ onClose }) {
  const [command, setCommand] = useState('');

  const handleCommandChange = (e) => {
    setCommand(e.target.value);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    console.log(`Command entered: ${command}`);
    setCommand('');
  };

  return (
    <div className="command-line-window">
      <div className="command-line-header">
        <span>Command Prompt</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className="command-line-content">
        <div className="cmd-output">
        </div>
        <form onSubmit={handleCommandSubmit}>
          <input
            type="text"
            value={command}
            onChange={handleCommandChange}
            placeholder="Enter command"
          />
        </form>
      </div>
    </div>
  );
}

export default CommandLine;
