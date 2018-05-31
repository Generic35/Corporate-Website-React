import React from 'react';

const Middle = () => {
  return (
    <div>
       <section id="middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 wow fadeInDown">
              <div className="skill">
                <h2>Our Skills</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.</p>
  
                <div className="progress-wrap">
                  <h3>Graphic Design</h3>
                  <div className="progress">
                    <div className="progress-bar  color1" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
                      <span className="bar-width">85%</span>
                    </div>
  
                  </div>
                </div>
  
                <div className="progress-wrap">
                  <h3>HTML</h3>
                  <div className="progress">
                    <div className="progress-bar color2" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
                      <span className="bar-width">95%</span>
                    </div>
                  </div>
                </div>
  
                <div className="progress-wrap">
                  <h3>CSS</h3>
                  <div className="progress">
                    <div className="progress-bar color3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                      <span className="bar-width">80%</span>
                    </div>
                  </div>
                </div>
  
                <div className="progress-wrap">
                  <h3>Wordpress</h3>
                  <div className="progress">
                    <div className="progress-bar color4" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                      <span className="bar-width">90%</span>
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
  
            <div className="col-sm-6 wow fadeInDown">
              <div className="accordion">
                <h2>Why People like us?</h2>
                <div className="panel-group" id="accordion1">
                  <div className="panel panel-default">
                    <div className="panel-heading active">
                      <h3 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1">
                          Lorem ipsum dolor sit amet
                          <i className="fa fa-angle-right pull-right"></i>
                        </a>
                      </h3>
                    </div>
  
                    <div id="collapseOne1" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <div className="media accordion-inner">
                          <div className="pull-left">
                            <img className="img-responsive" src="images/accordion1.png" />
                          </div>
                          <div className="media-body">
                            <h4>Adipisicing elit</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1">
                          Lorem ipsum dolor sit amet
                          <i className="fa fa-angle-right pull-right"></i>
                        </a>
                      </h3>
                    </div>
                    <div id="collapseTwo1" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor.
                      </div>
                    </div>
                  </div>
  
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1">
                          Lorem ipsum dolor sit amet
                          <i className="fa fa-angle-right pull-right"></i>
                        </a>
                      </h3>
                    </div>
                    <div id="collapseThree1" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor.
                      </div>
                    </div>
                  </div>
  
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapseFour1">
                          Lorem ipsum dolor sit amet
                          <i className="fa fa-angle-right pull-right"></i>
                        </a>
                      </h3>
                    </div>
                    <div id="collapseFour1" className="panel-collapse collapse">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    </div>
  );
};

export default Middle;