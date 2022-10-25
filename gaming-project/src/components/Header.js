import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    const linkStyles = {
        borderRadius: "25px",
        textAlign: "center",
        display: "inline-block",
        width: "75px",
        padding: "12px",
        margin: "0 150px 6px",
        background: "black",
        textDecoration: "none",
        color: "white",
      };

  return (
    <header>
      <h1>
        Chuck's Gaming Reviews
        <span className="logo" role="img">
        🧙🏻‍♂️
        </span>
      </h1>
    <NavLink className= "about" to= "/about" style={linkStyles}>About </NavLink>
    <NavLink to= "/" style={linkStyles}>Home</NavLink>
    <NavLink to= "/contact" style={linkStyles}>Contact</NavLink>
    </header>
  );
}

export default Header;