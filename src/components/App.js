import React from "react";
import { Route, Switch } from "react-router-dom";
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
        <AuthRequireRoute path="/about" component={AboutPage} />
        <AuthRequireRoute path="/courses" component={CoursesPage} />
        <Route path="/editAddress/:addressId" component={AddressPage} />
        <AuthRequireRoute path="/address" component={AddressPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/calender" component={CalenderPage} />
        <AuthRequireRoute path="/userprofile" component={UserProfilePage} />
        <Route component={PageNotFound} />

        {/* <Route exact path="/edit-address" component={() => <Address addressId={} />} /> */}
      </Switch>
    </div>
  );
}

export default App;
