import React, { useState } from 'react'

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true)

    window.addEventListener("OffLine",()=>{
        setOnlineStatus(false)
    })
    window.addEventListener("OnLine",()=>{
        setOnlineStatus(true);
    })

  return onlineStatus
}

export default useOnlineStatus;
