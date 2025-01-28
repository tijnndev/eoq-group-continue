# Windows XP Clone

This project is a modern recreation of Windows XP, built as part of a school assignment. The frontend is powered by React, while the backend leverages Flask to handle API requests and serve data. Together, this project brings the nostalgic experience of Windows XP into a web-based application.

Main Coders:
- Lajos
- Tal
- Tijn

## Table of Contents
- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## About the Project
This project was created by a team of three students to fulfill a school assignment. The goal was to replicate the look and feel of Windows XP. The backend ensures smooth data flow and serves as the backbone of the application. Our main task in the application was a game feature, where frank (our old teacher) was holding you prisoner into your own OS. By playing some games you could escape from it and reboot your system. EARRAPE WARNING!

## Technologies Used
### Frontend:
- **React**: For building the interactive user interface.
- **Vite**: For fast development and hot module replacement (HMR).
- **CSS**: To replicate the visual aesthetics of Windows XP.

### Backend:
- **Flask**: To create RESTful APIs and serve backend logic.
- **Python**: For backend scripting and server-side functionality.

### Others:
- **Ollama**: We used Ollama to integrate an AI into our game 

## Features
- **Windows XP Interface**: A pixel-perfect recreation of the classic Windows XP desktop.
- **Functional Applications**: Interactive replicas of classic XP apps, such as Notepad, CMD and a File Explorer
- **Backend Integration**: All data and functionality are supported by a robust Flask backend featuring an LLM Integration!

## Installation
### Prerequisites:
- Node.js
- Python 3.x
- npm or yarn
- Ollama 3.2

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/windows-xp-clone.git
   cd windows-xp-clone
   ```

2. Set up the frontend:
   ```bash
    cd frontend
    npm install
    npm run dev
    ```

3. Set up the backend:
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate # On Windows: venv\\Scripts\\activate
    pip install -r requirements.txt
    python app.py
    ```
    
Access the app: Open your browser and go to http://localhost:3000 for the frontend, and http://localhost:5000 for the backend.

### Usage
Once installed and running, you need to:
- First open the commandprompt and let frank do its words, then answer some coding-related questions.
- After that you can open the file explorer and view a note on how to remove frank from your system
- After beating frank in the CMD, the computer needs a reboot to view the command to delete frank from your system.
- When viewing the note, insert the command in the CMD to delete frank. EARRAPE WARNING
