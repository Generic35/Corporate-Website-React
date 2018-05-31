import React from "react";

const Content = () => {
  return (
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 wow fadeInDown">
              <div className="tab-wrap">
                <div className="media">
                  <div className="parrent pull-left">
                    <ul className="nav nav-tabs nav-stacked">
                      <li className="">
                        <a
                          href="#tab1"
                          data-toggle="tab"
                          className="analistic-01"
                        >
                          Responsive Web Design
                        </a>
                      </li>
                      <li className="active">
                        <a
                          href="#tab2"
                          data-toggle="tab"
                          className="analistic-02"
                        >
                          Premium Plugin Included
                        </a>
                      </li>
                      <li className="">
                        <a href="#tab3" data-toggle="tab" className="tehnical">
                          Predefine Layout
                        </a>
                      </li>
                      <li className="">
                        <a href="#tab4" data-toggle="tab" className="tehnical">
                          Our Philosopy
                        </a>
                      </li>
                      <li className="">
                        <a href="#tab5" data-toggle="tab" className="tehnical">
                          What We Do?
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="parrent media-body">
                    <div className="tab-content">
                      <div className="tab-pane fade" id="tab1">
                        <div className="media">
                          <div className="pull-left">
                            <img className="img-responsive" src="images/tab2.png"/>
                          </div>
                          <div className="media-body">
                            <h2>Adipisicing elit</h2>
                            <p>{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look even slightly
                              believable. If you are going to use.`}</p>
                          </div>
                        </div>
                      </div>
  
                      <div className="tab-pane fade active in" id="tab2">
                        <div className="media">
                          <div className="pull-left">
                            <img className="img-responsive" src="images/tab1.png"/>
                          </div>
                          <div className="media-body">
                            <h2>Adipisicing elit</h2>
                            <p>{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look even slightly
                              believable. If you are going to use.`}
                            </p>
                          </div>
                        </div>
                      </div>
  
                      <div className="tab-pane fade" id="tab3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                      </div>
  
                      <div className="tab-pane fade" id="tab4">
                        <p>{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words which don't look even slightly believable.
                          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                          hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                          chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
                          over 200 Latin words`}</p>
                      </div>
  
                      <div className="tab-pane fade" id="tab5">
                        <p>{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words which don't look even slightly believable.
                          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                          hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                          chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
                          over 200 Latin words, combined with a handful of model sentence structures,`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 wow fadeInDown">
                    <div className="testimonial">
                      <h2>Testimonials</h2>
                      <div className="media testimonial-inner">
                        <div className="pull-left">
                          <img
                            className="img-responsive img-circle"
                            src="images/testimonials1.png"
                          />
                        </div>
                        <div className="media-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt
                          </p>
                          <span>
                            <strong>-John Doe/</strong> Director of corlate.com
                          </span>
                        </div>
                      </div>

                      <div className="media testimonial-inner">
                        <div className="pull-left">
                          <img
                            className="img-responsive img-circle"
                            src="images/testimonials1.png"
                          />
                        </div>
                        <div className="media-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt
                          </p>
                          <span>
                            <strong>-John Doe/</strong> Director of corlate.com
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </section>
  );
};

export default Content;
