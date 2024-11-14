import React, { useState, useEffect } from 'react';

function CommandLine({ onClose }) {
  const [inputValue, setInputValue] = useState('');
  const [cmdOutput, setCmdOutput] = useState([]);
  const [prefix, setPrefix] = useState('C:\\>');

  useEffect(() => {
    insertLine(`${prefix} Welcome to the FAO (Frank\'s Alcoholic Oracle)`);
    insertLine(`${prefix} Type "name" to set your name.`);
    insertLine(`${prefix} Type "help" for a list of commands.`);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
      setInputValue('');
    }
  };

  const insertLine = (text, isAscii = false) => {
    setCmdOutput((prevOutput) => [
      ...prevOutput,
      isAscii ? <pre key={prevOutput.length}>{text}</pre> : <p key={prevOutput.length}>{text}</p>,
    ]);
  };

  const handleCommand = (command) => {
    insertLine(`${prefix} ${command}`);
    if (command === 'help') {
      insertLine('Available commands: help, clear, date, name <your name>, frank');
    } else if (command === 'clear') {
      setCmdOutput([]);
      insertLine(`${prefix} Welcome to the FAO (Frank\'s Alcoholic Oracle)`);
      insertLine(`${prefix} Type "name" to set your name.`);
      insertLine(`${prefix} Type "help" for a list of commands.`);
    } else if (command === 'date') {
      const currentDate = new Date();
      insertLine(`Current date and time: ${currentDate}`);
    } else if (command.startsWith('name')) {
      const newName = command.slice(5).trim();
      if (newName) {
        setPrefix(`C:\\${newName}>`);
        insertLine(`${prefix} Your name is now set to: ${newName}`);
      } else {
        insertLine(`${prefix} Please provide a name after the "name" command.`);
      }
    } else if (command === 'frank') {
      insertLine(`
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

      `, true); // Pass true to indicate this is ASCII art
    } else {
      insertLine(`'${command}' is not recognized as a command.`);
    }
  };

  return (
    <div className="command-line-window">
      <div className="command-line-header">
        <span>Command Line</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className="command-line-content" id="cmdOutput">
        {cmdOutput}
      </div>  
      <div className="command-line-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputSubmit}
          placeholder="Enter command..."
        />
      </div>
    </div>
  );
}

export default CommandLine;
