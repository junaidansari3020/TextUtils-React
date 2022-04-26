//I got this by typing rfc means react function component while typing you will see intellisence.

import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

//props is properties. ismein koi variable define karke hum uska value yahaan use karte hai
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// yahaan title, aboutText ka data type declare kardiya so that future mein galti se string ke jagah number ya object na bhejdoon.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

// Specifies the default values for props: waise toh main props ka istemaal karne wala hoon par agar props ka istemaal na karoon toh bydefault inn value ko istemaal karlena.
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
};