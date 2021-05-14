import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <Link to="/" className="footer-buttons--link">
          <div className="footer-buttons"><h2>PICKER</h2></div>
        </Link>
        <Link to="/" className="footer-buttons--link">
            <div className="footer-buttons"><h2>RESULTS</h2></div>
        </Link>
      </div>
    </div>
  );
}
export default Footer;
