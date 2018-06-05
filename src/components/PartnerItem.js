import React from "react";
import PropTypes from "prop-types";

const PartnerItem = props => {
  return (
    <div>
      <li>
        <a href="#">
          <img
            className="img-responsive wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay={`${props.delay + 300}ms`}
            src={props.partner.imageUrl}
          />
        </a>
      </li>
    </div>
  );
};

PartnerItem.propTypes = {
  partner: PropTypes.object.isRequired,
  delay: PropTypes.number.isRequired
};

export default PartnerItem;
