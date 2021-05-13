import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <Footer>
      <div>
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
