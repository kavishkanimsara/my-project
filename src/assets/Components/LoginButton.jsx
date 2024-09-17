import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

const LoginButton = () => {
   const {isAuthenticated , toggleAuth} = useContext(AuthContext);
  return (
    <div>
        <button onClick={toggleAuth}>{isAuthenticated ? 'Login':'Signup'}</button>
    </div>
  )
}

export default LoginButton