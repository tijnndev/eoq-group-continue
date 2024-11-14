import React, { useState, useEffect } from 'react';

function DesktopApp({ app_name, in_docker, isActive, onClick }) {
  const [appData, setAppData] = useState('');

  useEffect(() => {
    setAppData(app_name);
  }, [app_name]);

  const activeStyle =  in_docker ? 
                    !isActive ? 
                    { 
                        boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.75)' } : { 
                            boxShadow: '-2px -2px 0px rgba(0, 0, 0, 0.75)' } : {
                                boxSizing: 'border-box'
                            };

  return (
    <div 
      style={activeStyle} 
      className="app-icon appPadding flex flexColumn gap1rem" 
      onClick={() => {onClick()}}
    >
      <img src={`/public/app_img_${appData}.jpg`} alt={` /public/app_img_${appData}.jpg`} />
      {!in_docker && <p>{appData}</p>}
    </div>
  );
}

export default DesktopApp;
