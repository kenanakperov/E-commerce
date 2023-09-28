import React from "react";
import { useNavigate } from "react-router-dom";

const WomensCollection = () => {
  const navigate = useNavigate();
  return (
    <div className="each-img">
      <div className="text-container-glass">
        <div className="each-img-desc">
          <span>NEW COLLECTION</span>
          <h2>Be disfferent in your way!</h2>
          <h3>Find your unique style.</h3>
          <div className="womensButton">
            <button
              onClick={() => {
                navigate("/womenProducts");
              }}
            >
              Shop Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensCollection;