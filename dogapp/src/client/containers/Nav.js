import React from "react";
import { Link } from "react-router-dom";
import '../css/NavBar.css'

const Nav = props =>
  <ul className="Nav nav-tabs">
    <li className ="active" onClick={() => props.handlePageChange("home")}>
      <Link to="/">home</Link>
    </li>
    <li onClick={() => props.handlePageChange("Match")}>
      <Link to="/my-match">my match</Link>
    </li>
    <li onClick={() => props.handlePageChange("Top3")}>
      <Link to="/my-top-3">my top 3</Link>
    </li>
    <li onClick={() => props.handlePageChange("Profile")}>
        <Link to="/my-profile">my profile</Link>
      </li>
    </ul>;

export default Nav;
