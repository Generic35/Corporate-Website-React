import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div>
      <footer id="footer" className="midnight-blue">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                &copy; 2013
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://shapebootstrap.net/"
                  title="Free Twitter Bootstrap WordPress Themes and HTML templates"
                >
                  ShapeBootstrap
                </a>. All Rights Reserved.
              </div>
              <div className="col-sm-6">
                <ul className="pull-right">
                  {props.links.map((linkText, i) => {
                    return (
                    <li key={i}>
                      <a href="#">{linkText}</a>
                    </li>);
                  })}
                  
                  {/* <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </footer> {/*<!-- footer -->*/}     
    </div>
  );
};

Footer.propTypes = {
  links: PropTypes.array.required
}
export default Footer;