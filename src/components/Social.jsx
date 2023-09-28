import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <Link to={"https://www.facebook.com/"}>
            <i className="fab fa-facebook-f icon"></i>
          </Link>
        </li>

        <li>
          <Link to={"https://twitter.com/"}>
            <i className="fab fa-twitter icon"></i>
          </Link>
        </li>

        <li>
          <Link to={"https://www.linkedin.com/in/kenan-akperov-0260991b2/"}>
            <i className="fab fa-linkedin-in icon"></i>
          </Link>
        </li>

        <li>
          <Link to={"https://www.google.com/"}>
            <i className="fab fa-google-plus-g icon"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
