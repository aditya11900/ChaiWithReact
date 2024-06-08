import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {users} = useContext(UserContext)
  if (!users) return <div>Please login</div>
  return <div>Wlecome {users.username}</div>
}

export default Profile