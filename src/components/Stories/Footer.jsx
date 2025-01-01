import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="end-container">
        <div className="end-img"></div>
        <div className="end-content">
          <div className="thank-content">
            <h1>Ryno & Anja</h1>
            <p>Thank you</p>
          </div>
        </div>
        <div className="copyright-container">
          <p className="copyright">Copyright ⓒ {year} Ryno Van der Walt & Anja De Beer</p>
        </div>
      </div>

      <div className="scroll">
        <a href="#story-details">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
