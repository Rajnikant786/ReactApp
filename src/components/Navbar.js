import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import  '../App.css'

const Navbar = () => {
  return (    
      <div className="nav">
          <div className="logo">
            <Link to={'/'} className="navLink">Paswan Rajnikant</Link>
          </div>
          <div className="training_heading">
              <h6>ReactJs Training</h6>
          </div>
          <div className="navLinks">
            {/* <Link to={'/'} className="navLink">Home</Link>
            <Link to={'/Users'} className="navLink">Users</Link>
            <Link to={'/AddUser'} className="navLink">Add User</Link> */}
            <NavLink to={'/'} className="navLink">Home</NavLink>
            <NavLink to={'/Users'} className="navLink">Users</NavLink>
            <NavLink to={'/AddUser'} className="navLink">Add User</NavLink>
          </div>   
      </div>
  )
}

export default Navbar;
