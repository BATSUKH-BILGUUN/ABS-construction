import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header_left">
        <a href="/#home" className="logo" onClick={() => handleScroll("home")}>
          <img
            src="/assets/logo.png"
            alt="ABS construction Logo"
            className="header_logo"
          />
        </a>
      </div>
      <button className="burger-menu" onClick={toggleMenu}>
        
      </button>
      <nav className={`header_nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/#home" onClick={() => handleScroll("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="/#service" onClick={() => handleScroll("service")}>
              Services
            </a>
          </li>
          <li>
            <a href="/#project" onClick={() => handleScroll("project")}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#ceo-message" onClick={() => handleScroll("ceo-message")}>
              CEO Message
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={() => handleScroll("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;