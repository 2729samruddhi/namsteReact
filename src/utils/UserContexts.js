import React, { createContext } from 'react'

const UserContexts  = createContext({
     loggedInUser : "DefaultUser"
})

export default UserContexts;
