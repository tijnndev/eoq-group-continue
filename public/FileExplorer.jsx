import React, { useState } from 'react';
import DesktopApp from './DesktopApp';

function FileExplorer() {
    return (
        <div className='fileExplorer'>
            <div style={{width: '100%'}} className="topBar">
                <h3>File explorer</h3>
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
        </div>
    );
}

export default FileExplorer;
