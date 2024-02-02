import React from "react";

export default function Navbar() {
  return (
    <div>
      <div id="navbar-example2" className="navbar bg-info px-3 mb-3">
      <a className="navbar-brand" href="#">
        TextUtils
      </a>
       <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="/"
            role="button"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Third
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Fourth
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Fifth
              </a>
            </li>
          </ul>
        </li> */}
      </ul>
      
    </div>
    </div>
);
}