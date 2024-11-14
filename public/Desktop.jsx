import React from 'react'
import App from '../src/App'
import DesktopApp from './DesktopApp'
function Desktop() {
  return (
    <div className='Desktop'>
        <DesktopApp 
            app_name='firefox'
            />
    </div>
  )
}

export default Desktop