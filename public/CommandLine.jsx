import React, { useState, useEffect } from "react";

function CommandLine({ onClose }) {
  const [inputValue, setInputValue] = useState("");
  const [cmdOutput, setCmdOutput] = useState([]);
  const [prefix, setPrefix] = useState("C:\\>");
  const [showImage, setShowImage] = useState(false);
  const [finishedWriting, finishWriting] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

  useEffect(() => {
    if (!cmdOutput.length) {
      insertLine(`${prefix} Type "help" for a list of commands.`);
      insertLine(`
      Connecting....  
        `)
        setTimeout(() => {
            insertLine('Connected!')
        }, 2500);

        setTimeout(() => {
            insertLine("Watch out there! It’s me, the real Frankinator muahahahahahah.");
          }, 4500);
          
          setTimeout(() => {
            insertLine("Since they won’t re-hire me at Saxion, they say I drink too much, I’ve come to grade your assignments! Whether you like it or not.");
          }, 6500);
          
          setTimeout(() => {
            insertLine("Until you finish the course, you cannot leave.");
          }, 8500);
          
          setTimeout(() => {
            insertLine("I’m holding your family and all of your data hostage!");
          }, 10500);
          
          setTimeout(() => {
            insertLine("I have to say the code quality in these Python assignments isn’t looking too good. Haven’t I told you to use the Code Spell Checker extension before?");
          }, 12500);
          
          setTimeout(() => {
            insertLine("If you accomplish to outsmart me in this coding-contest, then I will return your data (and maybe your family).");
          }, 14500);
          
          setTimeout(() => {
            insertLine("\nThe goal: Remove me from your system.");
            finishWriting(true)
          }, 16500);
          
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = async (e) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
      setInputValue("");
    }
  };

  const insertLine = (text, isAscii = false) => {
    const lines = text.split("\n");
    setCmdOutput((prevOutput) => [
      ...prevOutput,
      ...lines.map((line, index) => (
        isAscii ? (
          <pre key={`${prevOutput.length}-${index}`}>{line}</pre>
        ) : (
          <p key={`${prevOutput.length}-${index}`}>{line}</p>
        )
      ))
    ]);
  };

  const handleCommand = async (command) => {
    if(!finishedWriting) return
    insertLine(`${prefix} ${command}`);
    if (command === "help") {
      insertLine(
        "Available commands: help, clear, date, name <your name>, frank, rm, hello"
      );
      insertLine('\n');
      insertLine('PS: There is no help coming ;)')
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
    } else if (command.startsWith("name")) {
      const newName = command.slice(5).trim();
      if (newName) {
        setPrefix(`C:\\${newName}>`);
        insertLine(`${prefix} Your name is now set to: ${newName}`);
      } else {
        insertLine(`${prefix} Please provide a name after the "name" command.`);
      }
    } else if (command === "frank") {
      insertLine(
        `
        ******################*=:::::::::::::-====-::.+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#+:..+%%%%%%%%%%%%*=*##
        **+####%%%%%%%%%%%#*---::::::::::::::-====-::.:%%%%%%%%###*++***++*#%%%%%%%%#*=..:=%%%%%%%%%%%%#**##
        **+@%%%%%%%%%%@%=:::---::::--====+++-:====-::::=+#####******+++*#**+++#%%%%%%#=.::=#%%%%%%%%%%%%**##
        **#%%%%%%%%%*---::::------==+*#%%%#+=-----=------=-=====+****+++++*****%%%%%%#-:::-#%%%%%%%%%%%%####
        *#*+%%%%#+=------::--===+*#%%%++==--==========+++==========++*++++=+**###%%%%*::::-#%%%%%%%%%%%%####
        **##%#+-----------==+*##%%%**========+++++++***+++++==========+++++===+*##%%%=:----*%%%%%%%%%%%%%###
        +=-=-=-------===++*#%%%%%%++=+====+++++++++#**+*++**++===+=====++++++===+####-----=+%%%%%%%%%%%%%###
        =:+-------==++*#%%%%%%%%*+++=++=+++**+*****#*********++++++==++++++++++++=+*+======+%%%%%%%%%%%%%###
        -=-=*+==+++#%%%%%%%%%%##+++*+++++**********#********+**+++*++++++******+++++++++++++%%%%%%%%%%%%%###
        --*##*+*#%%%%%%%%%%%%##+*+*+*+**************************+++*****+=+*********+**+++**#%%%%%%%%%%%%%##
        ##*##*%%%%%%%%%%%%%%%*+**++************++++++++++++++++++***##****++****************#%%%%%%%%%%%%%##
        #*++*##%%%%%%%%%%%%%#***+++*+*+***+++++====++========++++++**##***++++**************#%%%%%%%%%%%%%##
        ##+++##%%%#########*+**+++++++++++++=====================++++******++++***********###%%%%%%%%%%%%%##
        #=*#+*#%%%%%##%%%%#***+++++++++++======-------===========+++++**+***+==*#############%%%%%%%%%%%%%##
        #*****#%%%%%%%%%%%#++*++=+++++++========------============++++++++**++++*############%%%%%%%%%%%%%%%
        #*++=##%%%%%%%%%%#+=+**+++++++============-----===========+++***+++*+++++*###########%%%%%%%%%%%%%%%
        %#==-%#%%%%%%%%%##++++=+++++++==============---============+++**++++++++++*##########%%%%%%%%%%%%%%%
        %#===##%%%%%%%%%%#+++==+++++++=========================+++++++***+++*++++++*#########%%%%%%%%%%%%%%%
        %#+=**+%%%%%%%%%%#*++=++++++++++======================++++++++****++***++++*########%%%%%%%%%%%%%%%%
        %***#%%%%%%%%%%%%#++==++++++++++++====================++++++++**********++***#%#%##%%%%%%%%%%%%%%%%%
        %#%%%%%%%%%%%%%%%*++=++++++++++++++++++=+===============+++++++************++++*#%%%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%#=+++++++++++++++++++===================++++++***********++*****#%%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%=+==+++++++++++++++++===================+++++*************++****#%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%*+===++++**+++++++++++============+++++++++++++**********++++****%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%#=====++*++++++++++++===++===+++**********+++=++***************+*%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%%*+====+*+++++++++++++++++++***###%####***+++++++++**************%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%%%+=====++++++++++++++++++**###%%##%##*#**++++++++++++**+++******%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%%%#======+++++++++++++++***######*%%%#**+++==++++++++++++++*+++*#%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%%%%#=====+++********+++++**#####***#*++++*+++++++++++++++++++++*#%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%%%%%#+==+**########**++==+*********++***++====++++++++++++++++**%%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%%%%%%#+=*###%%%%%%%%*++===+++++*****+++++======++++++++++**++*#%%%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%%%%%%%#=***#%%%%%%%#*+++==++++++++++++++=======+++++++++++***#%%%%%%%%%%%%%%%%%%%%
        %%%%%%%%%%%%%####%%%%%%%%#+=##%**%%###*=+====+++++++++++++++++++++++++++++++***#%%%%%%%%####%#%%%%%%
        %%%%%%%###%%%%%####*##%%%%#++*******#**=++=====+++++++++***+++++++++**+++++++******************+++++
        %%%%%%%%%%%%%%%%%%%##**#%%%%=+=********+-++========++++++****#***+*****+++++++***%%%%#########******
        %%%%%%%%%%%%%%%%%%%%%##*+#%%%=+*********==+=======+++++++*****###********+++++***%%%%%%#############
        ##%%%%%%%%%%%%%%%%%%%%##**#%%#==+*******+=+++=+++##**+********####***********++***#%%%%%%%%%%%%%####
        %%%%%%%%%%%%%%%%%%%%%%%%##*#%%#=+++****#+=+****************####*********************######%%%%%%%%%%
        %%%%%%%%%%%%%%%%%%%%%%%%%###%%%*=+****##******#####*********##***********************#%%###*###%%%%%
        %%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%==***#############******++++*+++***********************#%%%%##*****#
        =%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%+=*######**###*****=++=++#*++++************************#%@@%%%###**
        =+%%%%%%%%%%%%%%%%%%%%%%%%%##%%%%%=+*######%%%*+*+++==+++++=++++***********#*************##%%@@%%%##
        =-#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=++**#######*#****++++++++++**************************###%%%%%%%%
        ===#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%++++******+****++++******++*****#######*************#####%%%%%%%
        ====%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#++++*****+=++*****************########*************#####%%###%%
        ====+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*+++*****++**#*******+++++***##########***********#####%%####%
        +==+==%%%%%#############%%%%%%%%%%%%%####+++++**********++++++++***#########************#####%%####%
        =++=++=#################%%%%%%%#%#%%%%%%%%%#+*+******+++**++++****#########************######%######
        ++++++++#################%%%%##%%%%%%%%%%%%%%#*+++++++++*******###########*************#############
        +++++++++*###############%%%%%%%%%%%%%%%%%%%%%%%#*++*******#*###########**************##############
        +++++++++++#############%%%%%%%%%%%%%%%%@@@%%%%%%%#******#####%%######***************###############
        +**+++++++++****#####%#**#%%%%%%%%%%%%%%@@@@@@%%%%%%%@%%%@@%%%%%%#####**************################
        *******++****+:-#####=----===%%%%%%%%%%%%%@@@@@%%%%%%%@@@@%%%%%%%######***********##################
        #**************#%%%*==========+%%%%%%%%%%%@@%@%@@%@%%%%@@@%%%%%%%%%##################%##############
        ##############%%%#+----=========+#%%%%%%%%%@@@%@@%@%%%%%%@@%%%%%%%%%%%#######%%%%%%%%###############
              `,
        true
      );
    } else {
      await fetchResponseFromAPI(command);
    }
  };

  const fetchResponseFromAPI = async (command) => {
    setIsLoading(true);
    try {
      const messages = [
        {
          role: "system",
          content:
          "You are frank, an ex teacher at saxion university. you quit because you thought life had something better to offer. but now you've turned alcoholic because you realised university was the top of life for you. now you hack into students computers to grade assignments and hold their computers hostage so all they do is course work. you're to respond as if youre holding the students computer hostage and they have no choice but to comply with what you say. Your only want in the world is for the student to be doing their course work. keep responses precise and to the point. keep it threatening. act always the evil hacker that took over the system. other teachers names are timothy, joost, peter, tibor, luuk. all the student wants to do is remove you from their course",
        },
        { role: "user", content: command },
      ];

      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
      });

      const data = await response.json();
      if (data.response) {
        insertLine(`${data.response}`);
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
        <div className="command-line-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputSubmit}
            placeholder="Enter command..."
            disabled={isLoading}
          />
        </div>
      </div>
    </>
  );
}

export default CommandLine;