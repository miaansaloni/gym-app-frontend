import React from "react";

const NavComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Classes</a>
          </li>
          <li>
            <a href="/">Plans & Pricing</a>
          </li>
          <li>
            <a href="/">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="navbar-login">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default NavComponent;
