import React from 'react'
import { useState, useEffect } from 'react'


function DesktopApp({ app_name, in_docker, isActive }) {
    const [appData, setAppData] = useState('')
    useEffect(() => {
        setAppData(app_name)
    })

    let activeStyle = {
        border: "1px solid #000"
        
    }

    return (
        <div style={activeStyle} className={`app-icon appPadding flex flexColumn gap1rem`}>
            <img src={`/public/app_img_${appData}.jpg`} alt={` /public/app_img_${appData}.jpg`} />
            {!in_docker &&
            <p>{appData}</p>}
        </div>
    )
}

export default DesktopApp