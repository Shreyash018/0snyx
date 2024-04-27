import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const navLinkStyle = {
      fontWeight: 'bold',
      color: '#404243',
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid" style={{marginLeft:'450px'}}>

    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7C6-dVroVYwKXlJSnBBFZDgac8EQ5NRzEg&usqp=CAU"
      alt=""
      width="150"
      height="140"
    />

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/body" className="nav-link active" style={{color:'#C49102', fontWeight:'bold'}} aria-current="page" href="/">
            SHREYASH SHINDE
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link"style={navLinkStyle}>
            ABOUT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/work" className="nav-link" style={navLinkStyle}>
            WORK
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" style={navLinkStyle}>
            CONTACT
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="https://drive.google.com/file/d/14Yz1te0oFK--zEZDY1YMC1riVmeMAAxV/view?usp=sharing" className="nav-link" style={navLinkStyle} target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
  }
}

export default Navbar;

