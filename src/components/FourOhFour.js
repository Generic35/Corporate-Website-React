import React from "react";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <div>
      <section id="error" className="container text-center">
        <h1>404, Page not found</h1>
        <p>
          {`The Page you are looking for doesn't exist or an other error occurred.`}
        </p>
        <Link className="btn btn-primary" to="/">
          GO BACK TO HOME PAGE
        </Link>
        {/*         
        <a className="btn btn-primary" href="index.html">
          GO BACK TO THE HOMEPAGE
        </a> */}
      </section>
    </div>
  );
};

export default FourOhFour;
