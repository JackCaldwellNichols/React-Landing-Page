import React from "react";
import PropType from "prop-types";

const Navbar = (props) => {
    return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
             <a className="navbar-brand ps-3" href="#">{props.brand}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a className="nav-link active me-3" aria-current="page" href="#">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">{props.about}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">{props.services}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">{props.contact}</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>

    )
  };

  Navbar.propTypes = {
    brand: PropType.string,
    about: PropType.string,
    services: PropType.string,
    contact: PropType.string,
    home: PropType.string

  }

  export default Navbar;