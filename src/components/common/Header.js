import React from "react";
import { Link,NavLink } from "react-router-dom";

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
      <Link to="/about" activeStyle={activeStyle}>
        About
      </Link>
      {" | "}
      <NavLink to="/address" activeStyle={activeStyle}>
        Address
      </NavLink>
      {" | "}
      <NavLink to="/register" activeStyle={activeStyle}>
        Register
      </NavLink>
      {" | "}
      <NavLink to="/login" activeStyle={activeStyle}>
        Login
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
          window.location.href = "/React";
          return;
        }}
      >
        LogOut
      </a>
      {" | "}
      <NavLink to="/calender" activeStyle={activeStyle}>
        Calender View
      </NavLink>
      {" | "}
      <NavLink to="/userprofile" activeStyle={activeStyle}>
        User Profile
      </NavLink>
    </nav>
  );
};

export default Header;
