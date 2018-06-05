import React from "react";
import preload from "../api/data.json";
import PartnerItem from "./PartnerItem";

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
                return <PartnerItem key={i} delay={delay} partner={partner} />;
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
