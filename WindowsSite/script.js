let draggedIcon = null;

function dragStart(event) {
  draggedIcon = event.target;

  if (!draggedIcon.innerHTML.trim()) {
    event.preventDefault();
    return;
  }

  draggedIcon.classList.add('dragging');
  event.dataTransfer.setData('text', '');
}

function dragEnd(event) {
  draggedIcon.classList.remove('dragging');
}

function openApp(event) {
  if (!draggedIcon || draggedIcon !== event.target) {
    document.getElementById('appWindow').style.display = 'block';
  }
}
function closeApp() {
  document.getElementById('appWindow').style.display = 'none';
}

document.querySelectorAll('.app-icon').forEach(icon => {
  icon.addEventListener('dblclick', openApp);
});

function setMode(size) {
  document.querySelectorAll('.app-icon').forEach(icon => {
    icon.classList.remove('small', 'medium', 'large');
    icon.classList.add(size);
  });

  updateGrid();
}

function getGridSize() {
  if (document.querySelector('.app-icon') && document.querySelector('.app-icon').classList.contains('small')) {
    return 50;
  } else if (document.querySelector('.app-icon') && document.querySelector('.app-icon').classList.contains('medium')) {
    return 100;
  } else {
    return 150;
  }
}

function updateGrid() {
  const desktop = document.querySelector('.desktop');
  const gridSize = getGridSize();
  const gridWidth = desktop.clientWidth;
  const gridHeight = desktop.clientHeight;

  const rows = Math.floor(gridHeight / gridSize);
  const cols = Math.floor(gridWidth / gridSize);
  const totalCells = rows * cols;

  desktop.querySelectorAll('.app-icon').forEach(icon => {
    if (icon.style.backgroundColor === "transparent" && icon.querySelector('p')) {
      icon.remove();
    }
  });

  const firstIcon = desktop.querySelector('.app-icon');
  let width = '100px';
  let type = 'medium';
  if (firstIcon) {
    if (firstIcon.classList.contains('small')) {
      width = '50px';
      type = "small"
    } else if (firstIcon.classList.contains('large')) {
      width = '150px';
      type = "large"
    }
  }

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('app-icon');
    cell.classList.add(type)
    cell.setAttribute('draggable', 'true');
    cell.style.backgroundColor = 'transparent';
    cell.style.boxShadow = "none"
    cell.innerHTML = ""

    desktop.appendChild(cell);
  }

  resetEventListeners();
}

function allowDrop(event) {
  event.preventDefault();
}

function resetEventListeners() {
  document.querySelectorAll('.app-icon').forEach(icon => {
    icon.addEventListener('dragstart', dragStart);
    icon.addEventListener('dragover', allowDrop);
    icon.addEventListener('drop', drop);
    icon.addEventListener('dragend', dragEnd);
  });
}

function drop(event) {
    event.preventDefault();
  
    if (draggedIcon && draggedIcon !== event.target) {
      const draggedContent = draggedIcon.innerHTML;
      const targetContent = event.target.innerHTML;
  
      const draggedBg = draggedIcon.style.backgroundColor;
      const targetBg = event.target.style.backgroundColor;
  
      const draggedShadow = draggedIcon.style.boxShadow;
      const targetShadow = event.target.style.boxShadow;
  
      draggedIcon.innerHTML = targetContent;
      event.target.innerHTML = draggedContent;
  
      draggedIcon.style.backgroundColor = targetBg;
      event.target.style.backgroundColor = draggedBg;
  
      draggedIcon.style.boxShadow = targetShadow;
      event.target.style.boxShadow = draggedShadow;
  
    }
  }
  
  

function adjustGridGap() {
  const desktop = document.querySelector('.desktop');
  const firstIcon = desktop.querySelector('.app-icon');

  if (firstIcon) {
    if (firstIcon.classList.contains('small')) {
      desktop.style.gap = '10px';
    } else if (firstIcon.classList.contains('medium')) {
      desktop.style.gap = '20px';
    } else if (firstIcon.classList.contains('large')) {
      desktop.style.gap = '100px';
    }
  }
}

document.querySelectorAll('.mode-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    var type = button.getAttribute('data-mode')
    setMode(type)
    adjustGridGap();
    updateGrid()
  });
});

updateGrid()


let prefix = 'C:\\>'
function openApp() {
  document.getElementById('appWindow').style.display = 'block';
  
  insertLine(`${prefix} Welcome to the FAO (Frank's Alcoholic Oracle)`);
  insertLine(`${prefix} Type "name" to set your name.`);
  insertLine(`${prefix} Type "help" for a list of commands.`);
  document.getElementById('cmdInput').focus();
}

function closeApp() {
  document.getElementById('appWindow').style.display = 'none';
}

function insertLine(text) {
  const cmdOutput = document.getElementById('cmdOutput');
  const newLine = document.createElement('div');
  newLine.textContent = text;
  cmdOutput.appendChild(newLine);

  cmdOutput.scrollTop = cmdOutput.scrollHeight;
}

function handleCommand(event) {
  if (event.key === 'Enter') {
    const inputField = document.getElementById('cmdInput');
    const command = inputField.value.trim();

    if (command) {
      insertLine(`${prefix} ${command}`);
      processCommand(command);
    }

    inputField.value = '';
  }
}

function processCommand(command) {
  if (command === 'help') {
    insertLine('Available commands: help, clear, date, name <your name>');
  } else if (command === 'clear') {
    document.getElementById('cmdOutput').innerHTML = '';
    insertLine(`${prefix} Welcome to the FAO (Frank\'s Alcoholic Oracle)`);
    insertLine(`${prefix} Type "name" to set your name.`);
    insertLine(`${prefix} Type "help" for a list of commands.`);
  } else if (command === 'date') {
    const currentDate = new Date();
    insertLine(`Current date and time: ${currentDate}`);
  } else if (command.startsWith('name')) {
    const newName = command.slice(5).trim();
    if (newName) {
      prefix = `C:\\${newName}>`
      insertLine(`${prefix} Your name is now set to: ${newName}`);
    } else {
      insertLine(`${prefix} Please provide a name after the "name" command.`);
    }
  } else {
    insertLine(`'${command}' is not recognized as a command.`);
  }
}

document.querySelectorAll('.app-icon').forEach(icon => {
  icon.addEventListener('dblclick', openApp);
});
