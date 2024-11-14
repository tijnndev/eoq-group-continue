import React from 'react'
import { useState, useEffect } from 'react'


function DesktopApp({ app_name }) {
    const [appData, setAppData] = useState('')
    useEffect(() => {
        setAppData(app_name)
    })

    return (
        <div className="appPadding flex flexColumn gap1rem">
            <img src={`/public/app_img_${appData}.jpg`} alt={` /public/app_img_${appData}.jpg`} />
            {in_docker &&
            <p>{appData}.jpg</p>            }
        </div>
    )
}

export default DesktopApp