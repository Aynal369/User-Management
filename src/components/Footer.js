import React from "react";

const Footer = () => {
  return (
    <div className="position-absolute bottom-0 start-50 translate-middle">
      <p>
        <small>
          Copyright &copy; {new Date().getFullYear()} || All Rights Reserved
        </small>
      </p>
    </div>
  );
};

export default Footer;
