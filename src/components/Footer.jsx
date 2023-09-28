import React from "react";
import { useState } from "react";
import Social from "./Social";
import HR from "./HR";
import { ArrowUp } from "../svg";

const Footer = () => {
  const [emailMessage, setEmailMessage] = useState("");
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  setTimeout(() => {
    setEmailMessage("");
  }, 3000);
  return (
    <div className="footer">
      <div className="footer-desc">
        <h2>Subscribe To Get Offers In Your Inbox</h2>
        <p>
          Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum
        </p>
        <div className="inpBtn">
          <input type="email" placeholder="example@gmail.com" />
          <button onClick={() => setEmailMessage("Email sent to you!")}>
            Subscribe
          </button>
        </div>
        <span>{emailMessage}</span>
      </div>
      <HR />
      <div className="footerBottom">
        <div className="centerSocial">
          <Social />
        </div>
        {/* <span>© 2023 T-Shirts Store | Powered by T-Shirts Store</span> */}
        <div className="footerBottomRight">
          <img src={require("../images/payment2.png")} alt="payment" />
          <span
            onClick={() => {
              scrollToTop();
            }}
          >
            <ArrowUp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
