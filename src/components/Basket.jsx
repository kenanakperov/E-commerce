import axios from "axios";
import React from "react";

const Basket = ({
  details,
  title,
  image,
  id,
  price,
  addIdWomenMen,
  rating,
  post,
  category,
  description,
}) => {
  const deleteItem = () => {
    axios.delete(`http://localhost:3003/cart/${id}`);
  }
  return (
    <div className="basketCard">
      <div className="ttbasket">
        <img className="basketImg" src={image} alt="basketimg" />
        <div className="basketTitle">
          <p>{title}</p>
        </div>
        <div className="basketPrice">
          <h3>{price}$</h3>
        </div>
        <div className="basketRemove">
          <h4 onClick={deleteItem}>Remove item</h4>
        </div>
      </div>
    </div>
  );
};

export default Basket;
