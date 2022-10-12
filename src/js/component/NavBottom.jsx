import React from "react";
import PropType from "prop-types";

const Footer = (props)  => {
    return (
        <nav className="footer navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="FooterText">
             {props.text}
            </div>
      </nav>
    )
  };

  Footer.propTypes = {
    text: PropType.string
  }


export default Footer;

