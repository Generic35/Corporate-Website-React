import React from 'react';

const Features = () => {
  return (
    <div>
       <section id="feature">
        <div className="container">
          <div className="center wow fadeInDown">
            <h2>Features</h2>
            <p className="lead">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut`}
              <br /> {`et dolore magna aliqua. Ut enim ad minim veniam`}</p>
          </div>
  
          <div className="row">
            <div className="features">
              <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="feature-wrap">
                  <i className="fa fa-bullhorn"></i>
                  <h2>Fresh and Clean</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                </div>
              </div>
  
              <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="feature-wrap">
                  <i className="fa fa-comments"></i>
                  <h2>Retina ready</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                </div>
              </div>
  
              <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="feature-wrap">
                  <i className="fa fa-cloud-download"></i>
                  <h2>Easy to customize</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                </div>
              </div>
  
              <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="feature-wrap">
                  <i className="fa fa-leaf"></i>
                  <h2>Adipisicing elit</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                </div>
              </div>
  
              <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="feature-wrap">
                  <i className="fa fa-cogs"></i>
                  <h2>Sed do eiusmod</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                </div>
              </div>
  
              <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="feature-wrap">
                  <i className="fa fa-heart"></i>
                  <h2>Labore et dolore</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;