import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section id="about-us">
        <div className="container">
          <div className="center wow fadeInDown">
            <h2>About Corlate</h2>
            <p className="lead">
              {`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut `}
              <br /> {`et dolore magna aliqua. Ut enim ad minim veniam`}
            </p>
          </div>

          <div id="about-slider">
            <div
              id="carousel-slider"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators visible-xs">
                <li
                  data-target="#carousel-slider"
                  data-slide-to="0"
                  className="active"
                />
                <li data-target="#carousel-slider" data-slide-to="1" />
                <li data-target="#carousel-slider" data-slide-to="2" />
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <img
                    src="images/slider_one.jpg"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="images/slider_one.jpg"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="images/slider_one.jpg"
                    className="img-responsive"
                    alt=""
                  />
                </div>
              </div>

              <a
                className="left carousel-control hidden-xs"
                href="#carousel-slider"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>

              <a
                className=" right carousel-control hidden-xs"
                href="#carousel-slider"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>

          <div className="skill-wrap clearfix">
            <div className="center wow fadeInDown">
              <h2>Our Skill</h2>
              <p className="lead">
                {`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut `}
                <br /> {`et dolore magna aliqua. Ut enim ad minim veniam`}
              </p>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <div
                  className="sinlge-skill wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div className="joomla-skill">
                    <p>
                      <em>85%</em>
                    </p>
                    <p>Joomla</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="sinlge-skill wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="html-skill">
                    <p>
                      <em>95%</em>
                    </p>
                    <p>HTML</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div
                  className="sinlge-skill wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="900ms"
                >
                  <div className="css-skill">
                    <p>
                      <em>80%</em>
                    </p>
                    <p>CSS</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="sinlge-skill wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="1200ms"
                >
                  <div className="wp-skill">
                    <p>
                      <em>90%</em>
                    </p>
                    <p>Wordpress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="team">
            <div className="center wow fadeInDown">
              <h2>Team of Corlate</h2>
              <p className="lead">
                {`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut `}
                <br /> {`et dolore magna aliqua. Ut enim ad minim veniam`}
              </p>
            </div>

            <div className="row clearfix">
              <div className="col-md-4 col-sm-6">
                <div
                  className="single-profile-top wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div className="media">
                    <div className="pull-left">
                      <a href="#">
                        <img
                          className="media-object"
                          src="images/man1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4>Jhon Doe</h4>
                      <h5>Founder and CEO</h5>
                      <ul className="tag clearfix">
                        <li className="btn">
                          <a href="#">Web</a>
                        </li>
                        <li className="btn">
                          <a href="#">Ui</a>
                        </li>
                        <li className="btn">
                          <a href="#">Ux</a>
                        </li>
                        <li className="btn">
                          <a href="#">Photoshop</a>
                        </li>
                      </ul>

                      <ul className="social_icons">
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
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p
                  >{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-md-offset-2">
                <div
                  className="single-profile-top wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div className="media">
                    <div className="pull-left">
                      <a href="#">
                        <img
                          className="media-object"
                          src="images/man2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4>Jhon Doe</h4>
                      <h5>Founder and CEO</h5>
                      <ul className="tag clearfix">
                        <li className="btn">
                          <a href="#">Web</a>
                        </li>
                        <li className="btn">
                          <a href="#">Ui</a>
                        </li>
                        <li className="btn">
                          <a href="#">Ux</a>
                        </li>
                        <li className="btn">
                          <a href="#">Photoshop</a>
                        </li>
                      </ul>
                      <ul className="social_icons">
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
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p
                  >{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}</p>
                </div>
              </div>
            </div>
            <div className="row team-bar">
              <div className="first-one-arrow hidden-xs">
                <hr />
              </div>
              <div className="first-arrow hidden-xs">
                <hr /> <i className="fa fa-angle-up" />
              </div>
              <div className="second-arrow hidden-xs">
                <hr /> <i className="fa fa-angle-down" />
              </div>
              <div className="third-arrow hidden-xs">
                <hr /> <i className="fa fa-angle-up" />
              </div>
              <div className="fourth-arrow hidden-xs">
                <hr /> <i className="fa fa-angle-down" />
              </div>
            </div>

            <div className="row clearfix">
              <div className="col-md-4 col-sm-6 col-md-offset-2">
                <div
                  className="single-profile-bottom wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="media">
                    <div className="pull-left">
                      <a href="#">
                        <img
                          className="media-object"
                          src="images/man3.jpg"
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="media-body">
                      <h4>Jhon Doe</h4>
                      <h5>Founder and CEO</h5>
                      <ul className="tag clearfix">
                        <li className="btn">
                          <a href="#">Web</a>
                        </li>
                        <li className="btn">
                          <a href="#">Ui</a>
                        </li>
                        <li className="btn">
                          <a href="#">Ux</a>
                        </li>
                        <li className="btn">
                          <a href="#">Photoshop</a>
                        </li>
                      </ul>
                      <ul className="social_icons">
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
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p
                  >{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-md-offset-2">
                <div
                  className="single-profile-bottom wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="media">
                    <div className="pull-left">
                      <a href="#">
                        <img
                          className="media-object"
                          src="images/man4.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4>Jhon Doe</h4>
                      <h5>Founder and CEO</h5>
                      <ul className="tag clearfix">
                        <li className="btn">
                          <a href="#">Web</a>
                        </li>
                        <li className="btn">
                          <a href="#">Ui</a>
                        </li>
                        <li className="btn">
                          <a href="#">Ux</a>
                        </li>
                        <li className="btn">
                          <a href="#">Photoshop</a>
                        </li>
                      </ul>
                      <ul className="social_icons">
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
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p
                  >{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
