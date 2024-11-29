import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/white-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar shadow-lg navbar-expand-lg custom-navbar   ${
        scrolled ? "navbar-scrolled" : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 75 }}
    >
      <div className="container-fluid px-3 ">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width={180} className="navbar-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {["Home", "About", "Portfolio", "Contact", "Privacy Policy"].map(
              (item, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link"
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link  "
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Service 1
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Service 2
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    More Services
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item ms-lg-3 my-2">
              <button
                type="button"
                className="btn btn-primary nav-quote-btn"
                data-bs-toggle="modal"
                data-bs-target="#quoteModal"
              >
                Request a Quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
