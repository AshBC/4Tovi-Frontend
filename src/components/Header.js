import React from "react";
import calzone from "../images/calzone.png";
import slice from "../images/slice2.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header__links--left">
        <Link to="/">
          <img className="logo" src={calzone} />
        </Link>
      </nav>
      <div className="btn-pic"><h1>Pizza Picker</h1></div>
      <div className="logo">
          <img
            className="slice"
            src={slice}
            alt="press this button to go to the page where you can upload your online exhibition information"
          />
      </div>
    </header>
  );
}

export default Header;
