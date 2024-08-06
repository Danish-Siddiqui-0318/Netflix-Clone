import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchicon from "../../assets/search_icon.svg";
import bellicon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li className="nav-link">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-link">
            <Link to={"/Series"}>TV Shows</Link>
          </li>
          <li className="nav-link">
            <Link>Movies</Link>
          </li>
          <li className="nav-link">
            <Link>New & Popular</Link>
          </li>
          <li className="nav-link">
            <Link>My List</Link>
          </li>
          <li className="nav-link">
            <Link>Browse By Language</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchicon} alt="" className="icons" />
        <p>Children</p>
        <img src={bellicon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
