import React from "react";
import "./nav.css";

const Nav = props => (
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile">
        <li className="score right">Player Score: {props.score}</li>
        <li className="message left">{props.message}</li>
      </ul>
    </div>
  </nav>
);

export default Nav;
