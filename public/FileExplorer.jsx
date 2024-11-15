import React, { useState } from 'react';
import DesktopApp from './DesktopApp';

function FileExplorer() {
    const [isNotesOpen, setIsNotesOpen] = useState(false);

    const openNotes = () => {
        setIsNotesOpen(true);
    };

    const closeNotes = () => {
        setIsNotesOpen(false);
    };

    return (
        <div className='fileExplorer'>
            <div style={{ width: '100%' }} className="topBar">
                <h3>File Explorer</h3>
                <button>X</button>
            </div>
            <div className='cont'>
                <div className="sidebar">
                    <div className="innerSideBar">
                        <section>
                            <h2>Files and directories</h2>
                        </section>
                        <DesktopApp 
                            app_name='lms'
                            isActive={false}
                            onClick={openNotes} // Opens Notes on click
                            isClickable
                        />
                    </div>
                </div>
                <div className="explorer">
                    <DesktopApp 
                        app_name='lms'
                        isActive={false}
                    />
                </div>
            </div>

            {/* Notes Window */}
            {isNotesOpen && (
                <div className="notesWindow">
                    <div className="notesTopBar">
                        <span>Notepad++++++</span>
                        <button onClick={closeNotes}>X</button>
                    </div>
                    <div className="notesContent">
                        <p>type: 'rm -rf /sys32' to remove frank from your computer</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FileExplorer;
