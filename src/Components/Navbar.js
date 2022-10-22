import React from "react"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <img id="gifnav" src="heroes.gif" style={{width: "70px"}}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/leaderboard">Leaderboards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup" target="_blank">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://35.175.182.106:8000/api/login" target="_blank">DEMO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar