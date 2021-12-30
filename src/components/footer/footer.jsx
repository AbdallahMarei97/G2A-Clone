import React from "react";
import "./footer.css";
import {ReactComponent as Logo} from "../../assets/logo_g2a_white.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-and-icons-container">
        <Logo className="footer-logo" />
          <p className="footer-Paragraph">
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry.
            <br />
            Lorem Ipsum has been the industry's
            <br />
            standard dummy text ever since the 1500s.
          </p>
          <div className="footerIcons">
            <a href="https://linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-contactUs">
          <div className="footer-contact-info">
            <h1 className="contatUsTitle">Contact US</h1>
            <p className="contatUsPara">
              <i className="fas fa-map-marker-alt"></i> Amman/Jordan
            </p>
            <p className="contatUsPara">
              <i className="fas fa-phone-alt"></i> +962798861423
            </p>
            <p className="contatUsPara">
              <i className="fas fa-envelope"></i> ifix@gmail.com
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">Copyright ©2021 All rights reserved</p>
    </footer>
  );
}

export default Footer;