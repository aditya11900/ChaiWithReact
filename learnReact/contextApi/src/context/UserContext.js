import React from 'react'

const UserContext = React.createContext()

export default UserContext;

//it provides a way to pass data through the component tree without having to pass props down manually at every level.
//It is used to share data between components without having to explicitly pass props through every level of the tree.

// it is a provider that allows us to pass data to the components that are nested within the provider.
