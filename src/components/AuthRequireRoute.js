import React from "react";
import { Redirect, Route } from "react-router";

/**
 * Class representing a route that checks if user is logged in.
 * @extends Route
 */
class AuthRequiredRoute extends Route {
  /**
   * @example <AuthRequiredRoute path="/" component={Products}>
   */
  render() {
    // call some method/function that will validate if user is logged in
    var authenticated = false;

    const username = this.getCookie("username");

    console.log(username);

    if (username == "" || username == null) {
      authenticated = false;
    } else {
      authenticated = true;
    }

    if (!authenticated) {
      return <Redirect to="/login" />;
    } else {
      return <this.props.component />;
    }
  }

  getCookie = function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
}

export default AuthRequiredRoute;
