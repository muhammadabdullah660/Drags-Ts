import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/home">
          <div>Logo</div>
        </Link>
        <div className="nav-links-container">
          <Link to="/" className="nav-link">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
