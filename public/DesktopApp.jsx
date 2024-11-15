import React, { useState, useEffect } from 'react';

function DesktopApp({ app_name, in_docker, isActive, onClick, isFrankDeleted }) {
  const [appData, setAppData] = useState('');

  useEffect(() => {
    setAppData(app_name);
    console.log(app_name)
    console.log(isFrankDeleted)
    console.log(app_name == 'notepad' && isFrankDeleted)
  }, [app_name]);

  function setImage() {
    setAppData('frank');
  }

  const shouldTriggerOnClick = (app_name === 'notepad' && isFrankDeleted) || app_name === 'cmd' || app_name === 'documents';

  const activeStyle = in_docker
    ? !isActive
      ? { boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.75)' }
      : { boxShadow: '-2px -2px 0px rgba(0, 0, 0, 0.75)' }
    : { display: 'flex', justifyContent: 'space-between', height: '50px' };

  return (
    <div
      style={activeStyle}
      className="app-icon appPadding flex flexColumn gap1rem"
      onClick={shouldTriggerOnClick ? onClick : setImage}
    >
      <img src={`app_img_${appData}.jpg`} alt={`app_img_${appData}.jpg`} />
      {!in_docker && <p>{appData}</p>}
    </div>
  );
}

export default DesktopApp;
