import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto text-center pt-4">
      <p>
        <small>
          Copyright &copy; {new Date().getFullYear()} || All Rights Reserved
        </small>
      </p>
    </div>
  );
};

export default Footer;
