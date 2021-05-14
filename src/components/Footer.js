import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Footer>
      <div className="footer">
        <Link to="/">
          <div className="footer-buttons"><h2>PICKER</h2></div>
        </Link>
        <Link to="/">
            <div className="footer-buttons"><h2>RESULTS</h2></div>
        </Link>
      </div>
    </Footer>
  );
}
export default Footer;
