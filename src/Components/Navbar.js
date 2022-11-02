import React from 'react'
import { NavLink } from 'react-router-dom'
import ('../App.css')



const Navbar = () => {
  return (
    <nav class="navbar navbar-dark fixed-top" id='navBar'>
  <div class="container-fluid">
    <a class="navbar-brand" href="/movielist" id='logo'>A Movie Database</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title mx-auto" id="offcanvasDarkNavbarLabel">A Movie Database</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <NavLink to='/movielist' id='list' className='nav-link'>Movie List</NavLink>
            <a class="nav-link " aria-current="page" href="#"></a>
          </li>
          <li class="nav-item">
            <NavLink to='/form' id='add' className='nav-link'>Add A Movie</NavLink>
            <a class="nav-link" href="#"></a>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-warning" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar