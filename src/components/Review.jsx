import React from "react";

const Review = () => {
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <h3>
        “ Very good quality T-shirts and lorem ipsum dolor sit amet, <br />{" "}
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />{" "}
        labore et dolore magna aliqua quis ipsum! ”
      </h3>
      <div className="centerImg">
        <img src={require("../images/5star.png")} alt="5star" />
      </div>
    </div>
  );
};

export default Review;
