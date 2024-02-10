import React from "react";
import { useState } from "react";
import light from "./light.png";
import dark from "./dark.png";
// import { Link } from "react-router-dom";
export default function Navbar() {
  const [icon, setIcon] = useState("/textutilsapp/src/component/dark.png");
  return (
    <div>
      <div id="navbar-example2" className="navbar px-3 mb-3 navbar-light">
        <a id="myhome" className="navbar-brand" href="/">
          TextUtils
        </a>
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
            <div>
              <img
                src={icon}
                onClick={() => {
                  setIcon(icon == light ? dark : light);
                  document.body.classList.toggle("toggle");
                  document
                    .getElementById("navbar-example2")
                    .classList.toggle("toggle");
                  // document.getElementById("exampleFormControlTextarea1").classList.toggle("toggle");
                  document.getElementById("myhome").classList.toggle("toggle");
                }}
                className="nav-link"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
