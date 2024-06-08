import React from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({ children }) => { //jo v props aa raha hai as it is ushko pass karo

    const[users, setUsers] = React.useState(null) //state banao
    
    return (
        <UserContext.Provider value={{users, setUsers}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider