import React from "react";
// import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div id="navbar-example2" className="navbar px-3 mb-3 navbar-light">
      <a id="myhome" className="navbar-brand" href="/">
        TextUtils
      </a>
      {/* <nav className="navbar fixed-bottom px-3 mb-3 navbar-light">
        <a id="myhome-bottom" className="navbar-brand" href="/">
          Fixed bottom
        </a>
      </nav> */}
       <ul className="nav nav-pills">
        <li className="nav-item">
          <a id="myhome" className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a id="myhome" className="nav-link disabled" href="/about">
            About
          </a>
        </li>
        <li className="nav-item">
          <div className="form-check form-switch">
          <input onClick={() =>{
            document.body.classList.toggle("toggle")
            document.getElementById("navbar-example2").classList.toggle("toggle");
            document.getElementById("myhome").classList.toggle("toggle"); 
            document.getElementById("myhome-bottom").classList.toggle("toggle");
          } }
          className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
        </li>
    </ul>
      
    </div>

    </div>
);
}