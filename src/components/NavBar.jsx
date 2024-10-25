import React from 'react'
import { Link } from 'react-router-dom'
import DarkButton from './DarkButton'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">TODOWEB</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Todos
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/alltodos">All Tasks</Link></li>
            <li><Link className="dropdown-item" to="/calender">Calender</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/importantTodos">Important Tasks</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="https://github.com/Raghurajpratapsingh28/TodoApp">GitHub</Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="htmlForm-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
