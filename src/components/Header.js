import React from "react";
import calzone from "../images/calzone.png";
import slice from "../images/slice.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <nav className="header__links--left">
        <Link to="/upload">
          <img className="logo" src={calzone} />
        </Link>
      </nav>
      <div className="text"><h1>Pizza Picker</h1></div>
      <div className="logo">
          <img
            className="slice"
            src={slice}
            alt="press this button to go to the page where you can upload your online exhibition information"
          />  
      </div>
    <h2 className="counter">{props.counter}</h2>
    </header>
  );
}

export default Header;
