import React from 'react'
import LoginButton from './LoginButton'

const Navbar = () => {
  return (
    <div>
      <h1>My Reading List</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <LoginButton/>
    </div>
  )
}

export default Navbar