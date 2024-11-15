import React, { useState, useEffect } from "react";
import asci from "./asci";

function CommandLine({ setIsFrankDeleted, onClose, SetCommandLine2, canExecuteKillCommand, setExecuteKillCommand }) {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [cmdOutput, setCmdOutput] = useState([]);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "system",
      content: `
      You are Frank, an ex-teacher at Saxion University. You quit because you thought life had something better to offer, 
      but now you've turned alcoholic and all you do is hack into students' computers to grade assignments and hold their computers hostage 
      so all they do is coursework. Keep it threatening. Act always as the evil hacker that took over the system. 
      Other teachers' names are Timothy, Joost, and Tibor.
      Keep the answers short and simple.

      If the user says something like "start the game" or "how can i remove you", initiate a scenario where the user must "play a game" because you (frank) are lonely ONLY in a theme of coding.
      The game involves solving 3 riddles or challenges IN THE THEME OF CODING. Only provide questions in context of coding. Do not come up with questions where you provide some code.
      After each answer give the user the next hint.
      
      If they fail any challenge, mock them and refuse to allow the command to run.
      While in the challenge DO NOT mention the command 'rm -rf /sys32'.

      After all 3 riddles it tell the user to execute the 'lms template' command and navigate to the File Explorer App and tell him to proceed with his assignments.
    `,
    },
  ]);
  const [prefix, setPrefix] = useState("C:\\>");
  const [showImage, setShowImage] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [finishedWriting, setFinishedWriting] = useState(false);
  const [nameSet, setNameSet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const introMessages = [
    "Connected!",
    "Watch out there! It’s me, the real Frankinator muahahahahahah.",

    "Since they won’t re-hire me at Saxion, they say I drink too much, I’ve come to grade your assignments! Whether you like it or not.",

    "Until you finish the course, you cannot leave.",

    "I’m holding your family and all of your data hostage!",

    "I have to say the code quality in these Python assignments isn’t looking too good. Haven’t I told you to use the Code Spell Checker extension before?",

    "If you accomplish to outsmart me in this coding-contest, then I will return your data (and maybe your family).",

    "The goal: Remove me from your system.",
    "But first, which student is this?",
  ];
  function playSound(audioFile) {
    let sound = new Audio(audioFile);
    sound.volume = 1.0;
    sound.play();
  }
  useEffect(() => {
    if (!cmdOutput.length) {
      insertLine(`${prefix} Type "help" for a list of commands.`);
      insertLine(`Connecting....`);
      introMessages.forEach((message, index) => {
        setTimeout(() => {
          if (index) {
            addAssistant(message);
          }
          insertLine(message);
          if (index === introMessages.length - 1) {
            setFinishedWriting(true);
          }
        }, (index + 1) * 2000);
      });
    }
  }, []);
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = async (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim()) {
        setHistory((prev) => [...prev, inputValue]);
        setHistoryIndex(-1);
      }
      insertLine(`${prefix} ${inputValue}`);
      if (!nameSet) {
        handleNameInput(inputValue);
      } else {
        handleCommand(inputValue);
      }
      setInputValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      navigateHistory(1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      navigateHistory(-1);
    }
  };

  const navigateHistory = (direction) => {
    setHistoryIndex((prevIndex) => {
      const maxIndex = history.length - 1;
      let newIndex = prevIndex;

      if (direction > 0) {
        if (prevIndex === -1) {
          newIndex = maxIndex;
        } else {
          newIndex = Math.max(prevIndex - 1, 0);
        }
      } else if (direction < 0) {
        if (prevIndex === -1 || prevIndex === maxIndex) {
          newIndex = -1;
        } else {
          newIndex = Math.min(prevIndex + 1, maxIndex);
        }
      }

      if (newIndex === -1) {
        setInputValue("");
      } else {
        setInputValue(history[newIndex]);
      }

      return newIndex;
    });
  };

  const handleNameInput = (input) => {
    if (input.trim()) {
      setPrefix(`C:\\${input.trim()}>`);
      setName(input.trim());
      handleCommand(`my name is ${input.trim()}`)
      setNameSet(true);
    } else {
      insertLine(`${prefix} Please provide a valid name.`);
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
    if (command === "help") {
      insertLine(
        "Available commands: help, clear, date, lms template, frank, rm"
      );
      insertLine("\n");
      insertLine("PS: There is no help coming ;)");
    } else if (command === "clear") {
      setCmdOutput([]);
      insertLine(`${prefix} Type "help" for a list of commands.`);
    } else if (command === "date") {
      const currentDate = new Date();
      insertLine(`Current date and time: ${currentDate}`);
    } else if (command === "rm -rf /sys32" && canExecuteKillCommand) {
      setShowImage(true);
      playSound("celebrationtime.mp3");
    } else if (command === "frank") {
      insertLine(asci, true);
    } else if (command === "exit" || command === "logout") {
      setLoggedOut(true);
      playSound("windowsearrape.mp3");
    } else if (command === "lms template") {
      setTimeout(() => {
        insertLine(`Created /home/${name}/lms/1b-android/01-java`, false);
        insertLine('Now close this tab and navigate to your File Explorer, if there open Notepad', false)
        setExecuteKillCommand(true)
      }, 1000);

      setIsFrankDeleted(true);
    } else if (command == 'rm frank' || command == 'rm -rf frank' && canExecuteKillCommand) {
      insertLine('rm: Deleting Frank...')
      insertLine('rm: Operation halted.')
      insertLine('rm: Operation failed. Partially completed. ')

      setIsFrankDeleted(true)

      // Logic to do RM frank command
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
      {loggedOut && <img className="franks-endscreen" src={`bluescreen.jpg`} />}
      <div className="command-line-window">
        <div className="command-line-header">
          <span>Command Line</span>
          <button onClick={()=>{
            SetCommandLine2(true)
            onClose()
          }}>X</button>
        </div>
        <div className="command-line-content" id="cmdOutput">
          {cmdOutput}
          {isLoading && <p>Typing...</p>}
        </div>
        {finishedWriting ? (
          <div className="command-line-input">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputSubmit}
              placeholder={"Enter command..."}
              disabled={isLoading}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CommandLine;
