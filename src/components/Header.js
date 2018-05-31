import React from 'react';

const Header = () => {
  return (
    <div>
       <header id="header">
        <div className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-4">
                <div className="top-number">
                  <p>
                    <i className="fa fa-phone-square"></i> +1 (514) 808-681</p>
                </div>
              </div>
              <div className="col-sm-6 col-xs-8">
                <div className="social">
                  <ul className="social-share">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="search">
                    <form role="form">
                      <input type="text" className="search-form" autoComplete="off" placeholder="Search" />
                      <i className="fa fa-search"></i>
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
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="logo" />
              </a>
            </div>
  
            <div className="collapse navbar-collapse navbar-right">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="portfolio.html">Portfolio</a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-item.html">Blog Single</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
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
};

export default Header;