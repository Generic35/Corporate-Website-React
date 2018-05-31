/* eslint-disable import/no-named-as-default */
// import { NavLink, Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

import Features from "./Features";
import RecentWorks from "./RecentWorks";
import OurServices from "./OurServices";
import Middle from "./Middle";
import Content from "./Content";
import Partners from "./Partners";
import ContactInfo from './ContactInfo';
import Bottom from './Bottom';
import Footer from './Footer';

// import AboutPage from "./AboutPage";
// import FuelSavingsPage from "./containers/FuelSavingsPage";
// import HomePage from "./HomePage";
// import NotFoundPage from "./NotFoundPage";
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    // const activeStyle = { color: "blue" };
    const footerLinksText = [
      'Home',
      'About Us',
      'Faq',
      'Contact Us'
    ];
    return (
      <div>
        <Features />
        <RecentWorks />
        <OurServices />
        <Middle />
        <Content />
        <Partners />
        <ContactInfo />
        <Bottom />
        <Footer links={footerLinksText}/>

        {/* <div>
          <div>
            <NavLink exact to="/" activeStyle={activeStyle}>
              Home
            </NavLink>
            {" | "}
            <NavLink to="/fuel-savings" activeStyle={activeStyle}>
              Demo App
            </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/fuel-savings" component={FuelSavingsPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div> */}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
