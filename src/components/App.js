import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import AddressPage from "./address/AddressPage";
import RegisterPage from "./account/RegisterPage";
import LoginPage from "./account/LoginPage";
import CalenderPage from "./calender/CalenderPage";
import UserProfilePage from "./userprofile/UserProfilePage";
import AuthRequireRoute from "./AuthRequireRoute";

function App() {
  
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/editAddress/:addressId" component={AddressPage} />
        <AuthRequireRoute path="/address" component={AddressPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/calender" component={CalenderPage} />
        <AuthRequireRoute exact path="/userprofile" component={UserProfilePage} />
        <AuthRequireRoute path="/about" component={AboutPage} />
        <AuthRequireRoute path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />

        {/* <Route exact path="/edit-address" component={() => <Address addressId={} />} /> */}
      </Switch>
    </div>
  );
}

export default App;
