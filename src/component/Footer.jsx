import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { ImPhone } from "react-icons/im";

function Footer() {
  return (
    <footer className="footer">
      <p>
        <ImPhone className="social-icon" />
        Toll Free 18002 200 1234
      </p>
      <p>
        <FaFacebook className="social-icon" />
        www.facebook.com/cripumps
      </p>
      <p>
        <FaGlobe className="social-icon" />
        www.cripupms.com
      </p>
    </footer>
  );
}

export default Footer;
