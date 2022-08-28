import React from 'react'
import { Link } from 'react-router-dom'
import "./StyleNavbar.css"

function Navbar() {
  return (
    <>
          <nav className="container navbar navbar-expand-lg">
              <div className="container">
                  <Link to="/" className="navbar-brand" id='personal'>Personal Website</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link to="/" className="nav-link">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/about" className="nav-link">About</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/portofolio" className="nav-link">Portofolio</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/skill" className="nav-link">Skill</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
    </>
  )
}

export default Navbar