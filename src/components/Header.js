import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  state = {
    searchTerm: ""
  };

  onSearchTermChanged = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
  render() {
    return (
      <div>
        <header id="header">
          <div className="top-bar">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-xs-4">
                  <div className="top-number">
                    <p>
                      <i className="fa fa-phone-square" /> +1 (514) 808-681
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-8">
                  <div className="social">
                    <ul className="social-share">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-skype" />
                        </a>
                      </li>
                    </ul>
                    <div className="search">
                      <form role="form">
                        <input
                          onChange={this.onSearchTermChanged}
                          value={this.state.searchTerm}
                          type="text"
                          className="search-form"
                          autoComplete="off"
                          placeholder="Search"
                        />
                        <i className="fa fa-search" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="navbar navbar-inverse" role="banner">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="index.html">
                  <img src="images/logo.png" alt="logo" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-right">
                <ul className="nav navbar-nav">
                  <li>
                    <NavLink exact to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/aboutus">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog-item.html">Blog Single</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li>
                        <NavLink to="404">404</NavLink>
                      </li>
                      <li>
                        <a href="shortcodes.html">Shortcodes</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
