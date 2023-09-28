import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import { MailIcon, MapIcon, PhoneIcon } from "../svg";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="aboutText">
          <h2>Contact Us</h2>
          <h3>
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
            ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
          </h3>
        </div>
        <div className="contactTT">
          <h3 className="contactTTDesc">Get in touch</h3>
          <h3 className="contactDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
            tempor, congue justo at, lobortis orci.
          </h3>
          <ul className="contactinfo">
            <li className="contactLi">
              <MapIcon /> Ahmadli,Ganja prospekt 103
            </li>
            <li className="contactLi">
              <MailIcon /> kenanakperov5@gmail.com
            </li>
            <li className="contactLi">
              <PhoneIcon /> +994559994142
            </li>
          </ul>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
