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

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/address" component={AddressPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/calender" component={CalenderPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
