import React from "react";

const Partners = () => {
  return (
    <div>
      <section id="partner">
        <div className="container">
          <div className="center wow fadeInDown">
            <h2>Our Partners</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut
              <br /> et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>

          <div className="partners">
          <ul>
              <li>
                <a href="#">
                  <img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="images/partners/partner1.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms" src="images/partners/partner2.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="900ms" src="images/partners/partner3.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="1200ms" src="images/partners/partner4.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="1500ms" src="images/partners/partner5.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
