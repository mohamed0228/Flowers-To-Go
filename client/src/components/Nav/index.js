import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";



function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1 one">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1 one">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1 one">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 one">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1 space-evenly ">
      <h1>
        <Link to="/">
          <span enter="bounceIn" role="img" aria-label="shopping bag" >🌼</span>
          -Flowers-To-Go-🌺


        </Link>
       
      </h1>

      <nav className="navbar">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
