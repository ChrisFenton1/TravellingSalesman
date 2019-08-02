import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {/* {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink> */}

      {/* Comment goes here */}
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/address" activeStyle={activeStyle}>
        Address
      </NavLink>
      {" | "}
      <a
        href="#"
        onClick={() => {
          var d = new Date();
          var exdays = 365;
          d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
          var expires = "expires=" + d.toUTCString();
          document.cookie = "username" + "=" + ";" + expires + ";path=/";
          //console.log(document.cookie);
          window.location.href = "/login";
          return;
        }}
      >
        LogOut
      </a>
    </nav>
  );
};

export default Header;
