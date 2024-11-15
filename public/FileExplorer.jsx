import React, { useState, useEffect, useRef } from 'react';
import DesktopApp from './DesktopApp';

function FileExplorer({ onClose, setIsFrankDeleted, isFrankDeleted, isMalwareRemoved, setIsMalwareRemoved }) {
    const [isNotesOpen, setIsNotesOpen] = useState(false);
    const notesWindowRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (notesWindowRef.current && !notesWindowRef.current.contains(event.target)) {
                setIsNotesOpen(false);
            }
        }

        if (isNotesOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isNotesOpen]);

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
                <button onClick={onClose}>X</button>
            </div>
            <div className='cont'>
                <div className="sidebar">
                    <div className="innerSideBar">
                        <section>
                            <h2>Files and directories</h2>
                        </section>
                        <DesktopApp
                            app_name='notepad'
                            isActive={false}
                            onClick={openNotes} 
                            isClickable
                            isFrankDeleted={isFrankDeleted}
                        />
                    </div>
                </div>
                <div className="explorer">
                    <DesktopApp
                        app_name='lms'
                        isActive={false}
                        onClick={openNotes} 
                        isClickable
                        isFrankDeleted={isFrankDeleted}
                    />
                </div>
            </div>

            {isNotesOpen && (
                <div className="notesWindow" ref={notesWindowRef}>
                    <div className="notesTopBar">
                        <span>Notepad++++++</span>
                        <button onClick={closeNotes}>X</button>
                    </div>
                    <div className="notesContent">
                        {isMalwareRemoved ? (
                            <p>type: 'rm -rf /sys32' to remove frank from your computer</p>
                        ) : (
                            <p>I've just found some malware on your system, update your system to find the solution in this note. PS: Timothy</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FileExplorer;
