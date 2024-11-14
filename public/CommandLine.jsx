import React, { useState, useEffect } from "react";
import asci from "./asci";

function CommandLine({ onClose }) {
  const [inputValue, setInputValue] = useState("");
  const [cmdOutput, setCmdOutput] = useState([]);
  const [chatHistory, setChatHistory] = useState([{
    role: "system",
    content: "EVERY MESSAGE say something about: 'rm -rf /sys32' BUT NOT THIS FULL COMMAND, only hint about it. You are Frank, an ex teacher at saxion university. you quit because you thought life had something better to offer. but now you've turned alcoholic and all you do is hack into students computers to grade assignments and hold their computers hostage so all they do is course work. keep it threatening. act always the evil hacker that took over the system. other teachers names are timothy, joost and tibor. EVERY MESSAGE HINT TO TYPE: 'rm -rf /sys32'.",
  }
  ,]);
  const [prefix, setPrefix] = useState("C:\\>");
  const [showImage, setShowImage] = useState(false);
  const [finishedWriting, setFinishedWriting] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator
  const introMessages = [
    "Connected!",
    "Watch out there! It’s me, the real Frankinator muahahahahahah.",

    "Since they won’t re-hire me at Saxion, they say I drink too much, I’ve come to grade your assignments! Whether you like it or not.",

    "Until you finish the course, you cannot leave.",

    "I’m holding your family and all of your data hostage!",

    "I have to say the code quality in these Python assignments isn’t looking too good. Haven’t I told you to use the Code Spell Checker extension before?",

    "If you accomplish to outsmart me in this coding-contest, then I will return your data (and maybe your family).",

    "\nThe goal: Remove me from your system.",
  ];
  function playSound() {
    let sound = new Audio("celebrationtime.mp3");
    sound.volume = 1.0;
    sound.play();
  }
  useEffect(() => {
    if (!cmdOutput.length) {
      insertLine(`${prefix} Type "help" for a list of commands.`);
      insertLine(`
      Connecting....  
        `);
      introMessages.forEach((message, index) => {
        setTimeout(
          () => {
            if (index) {
              addAssistant(message);
            }
            insertLine(message);
          },
          (index + 1) * 2000
        );
      });
      setFinishedWriting(true);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = async (e) => {
    if (e.key === "Enter") {
      console.log(inputValue);

      handleCommand(inputValue);
      setInputValue("");
    }
  };

  function addAssistant(message) {
    setChatHistory([...chatHistory, { role: "assistant", content: message }]);
  }

  const insertLine = (text, isAscii = false) => {
    const lines = text.split("\n");
    setCmdOutput((prevOutput) => [
      ...prevOutput,
      ...lines.map((line, index) =>
        isAscii ? (
          <pre key={`${prevOutput.length}-${index}`}>{line}</pre>
        ) : (
          <p key={`${prevOutput.length}-${index}`}>{line}</p>
        )
      ),
    ]);
  };

  const handleCommand = async (command) => {
    if (!finishedWriting) return;
    insertLine(`${prefix} ${command}`);
    if (command === "help") {
      insertLine(
        "Available commands: help, clear, date, name <your name>, frank, rm, hello"
      );
      insertLine("\n");
      insertLine("PS: There is no help coming ;)");
    } else if (command === "clear") {
      setCmdOutput([]);
      insertLine(`${prefix} Welcome to the FAO (Frank's Alcoholic Oracle)`);
      insertLine(`${prefix} Type "name" to set your name.`);
      insertLine(`${prefix} Type "help" for a list of commands.`);
    } else if (command === "date") {
      const currentDate = new Date();
      insertLine(`Current date and time: ${currentDate}`);
    } else if (command === "rm -rf /sys32") {
      setShowImage(true);
      playSound();
    } else if (command.startsWith("name")) {
      const newName = command.slice(5).trim();
      if (newName) {
        setPrefix(`C:\\${newName}>`);
        insertLine(`${prefix} Your name is now set to: ${newName}`);
      } else {
        insertLine(`${prefix} Please provide a name after the "name" command.`);
      }
    } else if (command === "frank") {
      insertLine(asci, true);
    } else {
      await fetchResponseFromAPI(command);
    }
  };

  const fetchResponseFromAPI = async (command) => {
    setIsLoading(true);
    try {
      const messages = [...chatHistory, { role: "user", content: command }];

      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
      });

      const data = await response.json();
      if (data.response) {
        insertLine(`${data.response}`);
        setChatHistory([
          ...messages,
          { role: "assistant", content: data.response },
        ]);
      }
    } catch (error) {
      console.error("Error fetching from API:", error);
      insertLine(`'${command}' is not recognized as a command.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {showImage && (
        <img className="franks-endscreen" src={`frank-scare.jpg`} />
      )}
      <div className="command-line-window">
        <div className="command-line-header">
          <span>Command Line</span>
          <button onClick={onClose}>X</button>
        </div>
        <div className="command-line-content" id="cmdOutput">
          {cmdOutput}
          {isLoading && <p>Typing...</p>} {/* Show loading indicator */}
        </div>
        {
          finishedWriting ? <div className="command-line-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputSubmit}
            placeholder={"Enter command..."}
            disabled={isLoading}
          />
        </div> : ""
        }
      </div>
    </>
  );
}

export default CommandLine;
