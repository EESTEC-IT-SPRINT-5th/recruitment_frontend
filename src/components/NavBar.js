import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <header class="navbar pl-5 py-3">
        <div>
          <img src={logo} style={{ maxHeight: 70 }} />
        </div>
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item"></a>
            <span class="navbar-burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <Link class="navbar-item" to="/">
                Enter Participant Data
              </Link>
              <Link class="navbar-item" to="/participants">
                Participants
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
