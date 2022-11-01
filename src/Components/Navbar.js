import React from 'react'
import { NavLink } from 'react-router-dom'
import ('../App.css')



const Navbar = () => {
  return (
    <div className='nav justify-content-end'>
        <li class="nav-item">
          <a class="nav-link disabled" id='logo'> A Movie Database</a>
        </li>
      <ul class="nav">
        <li className="nav-item">
          <NavLink to='/movielist' id='list' className='nav-link'>Movie List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/form' id='add' className='nav-link'>Add A Movie</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar