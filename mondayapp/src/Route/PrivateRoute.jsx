import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from '../Context/Authcontext'

const PrivateRoute = ({children}) => {
    const { state, logout } = useContext(Authcontext)
    if (!state.isAuth)
    {
        return <Navigate  to="/"/>
    }
    return children
  
}

export default PrivateRoute