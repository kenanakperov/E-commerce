import React, { useEffect } from "react";
import { Logo, Menu, Logout } from "../svg/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Basket from "./Basket";
const Header = ({ setUser }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/cart").then((res) => {
      setData(res.data);
    });
  });
  var totalPrice = 0;
  const navigate = useNavigate();
  const [addCardHead, setaddCardHead] = useState("hide");
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    setUser(false);
  };
  return (
    <>
      <div className="navbar">
        <ul className="ul-l">
          <li onClick={() => navigate("/dashboard")}>Home</li>
          <li onClick={() => navigate("/menProducts")}>Men</li>
          <li onClick={() => navigate("/womenProducts")}>Women</li>
          <li onClick={() => navigate("/about")}>About</li>
        </ul>
        <Logo className="logo" onClick={() => navigate("/dashboard")} />
        <ul className="ul-r">
          <li onClick={() => setaddCardHead("addCardHead")}>Cart</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={logOut}>
            <Logout />
          </li>
        </ul>
        <div className="dropdown">
          <button className="dropbtn">
            <Menu />
          </button>
          <div className="dropdown-content">
            <ul>
              <li onClick={() => navigate("/dashboard")}>Home</li>
              <li onClick={() => navigate("/menProducts")}>Men</li>
              <li onClick={() => navigate("/womenProducts")}>Women</li>
              <li onClick={() => navigate("/about")}>About</li>
              <li onClick={() => setaddCardHead("addCardHead")}>Cart</li>
              <li onClick={() => navigate("/contact")}>Contact</li>
              <li onClick={logOut}>Log-out</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={addCardHead}>
        <div className="addCardHeadBtn" onClick={() => setaddCardHead("hide")}>
          X
        </div>
        <div className="addLeft" onClick={() => setaddCardHead("hide")}></div>
        <div className="addRight">
          <h2 className="ShoppingCart">Shopping Cart</h2>
          {data.map((item, index) => {
            totalPrice += item.price;
            return (
              <Basket
                key={index}
                id={item.id}
                image={item.image}
                rating={item.rating}
                price={item.price}
                title={item.title}
                description={item.description}
                category={item.category}
                details={"men-details"}
                post={"postId"}
                size={item.size}
              />
            );
          })}
          <hr className="totalhr" />
          <h3 className="otherPrice">
            Product Price: {totalPrice.toFixed(2)}$
          </h3>
          <h3 className="otherPrice1">
            Delivery and taxes(18%):{((totalPrice / 100) * 10).toFixed(2)}$
          </h3>
          <h3 className="totalPrice">
            Total Price:{" "}
            {totalPrice + parseInt(((totalPrice / 100) * 10).toFixed(2))}$
          </h3>
          <p className="checkOut">
            <span
              onClick={() => {
                navigate("/checkOut");
              }}
            >
              Check Out
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;