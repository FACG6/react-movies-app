import React from "react";
import "./style.css";

export default props => (
  <nav className="nav">
    <a href="/" className="logo-anchor">
      <div className="logo">Akshenha</div>
    </a>
    <div className="navigation">
      <span className="welcome-text text">Hello Ahmed</span>
      <a href={props.href} className="navigate text">
        {props.value}
      </a>
    </div>
  </nav>
);
