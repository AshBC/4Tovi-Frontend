import React from "react";
import calzone from "../images/calzone.png";
import slice from "../images/slice.jpg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <nav className="header__links header__links--left">
        <Link to="/">
          <img className="logo" src={calzone} />
        </Link>
      </nav>
      <div className="btn-pic">
          <img
            className="plus-sign"
            src={slice}
            alt="press this button to go to the page where you can upload your online exhibition information"
          />
      </div>
    </header>
  );
}

export default Header;
