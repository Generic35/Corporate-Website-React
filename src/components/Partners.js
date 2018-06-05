import React from "react";
import preload from "../api/data.json";

const Partners = () => {
  let delay = 0;
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
              {preload.partners.map((partner, i) => {
                delay += 300;
                return (
                  <li key={i}>
                    <a href="#">
                      <img
                        className="img-responsive wow fadeInDown"
                        data-wow-duration="1000ms"
                        data-wow-delay={`${delay + 300}ms`}
                        src={partner.imageUrl}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
