import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top px-5 py-4">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="#home">
          <h1 className="fw-bold text-secondary fs-4">eNno</h1>
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                {
                <a
  className={`nav-link menu ${activeLink === item.href ? "active" : ""}`}
  href={item.href}
  onClick={() => handleSetActive(item.href)}
>
  {item.name}
</a>
}
              </li>
            ))}
            {/* Button */}
            <li className="nav-item">
              <button className="btn btn-success px-3 rounded-pill">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
