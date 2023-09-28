import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Check, Minus, Plus } from "../svg";

const WomenDetails = () => {
  const [descHide, setDescHide] = useState("hide");
  const [size, setSize] = useState("");
  const [data, setData] = useState([]);
  const [dis, setDis] = useState(false);
  const { id } = useParams();
  const [othetData, setOtherData] = useState([]);
  const womenID = parseInt(id)+ 12

  useEffect(() => {
    axios.get("http://localhost:3003/fourDataWomen").then((res) => {
      setOtherData(res.data.data);
    });
  },[]);

  const sendId = () => {
    axios.post(`http://localhost:3003/cart/${womenID}`, { id });
    setDis(true);
  };

  useEffect(() => {
    axios(`http://localhost:3003/womens/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);
  const showHide = () => {
    if (descHide === "hide") {
      setDescHide("show");
    } else {
      setDescHide("hide");
    }
  };
  return (
    <div>
      <Header />
      <div className="detailsTT">
        <img className="detailsImg" src={data.image} alt="img" />
        <div className="detailsDesc">
          <span>MEN</span>
          <h2>{data.title}</h2>
          <h3>
            {data.price}$ <span>& Free Shipping</span>
          </h3>
          <h4>{data.description}</h4>
          <p>Size:</p>
          <ul className="sizes">
            <li onClick={() => setSize("xs")}>xs</li>
            <li onClick={() => setSize("s")}>s</li>
            <li onClick={() => setSize("m")}>m</li>
            <li onClick={() => setSize("l")}>l</li>
            <li onClick={() => setSize("xl")}>xl</li>
            <li className="selected">Selected: {size}</li>
          </ul>

          <hr />
          <button
            onClick={sendId}
            disabled={size === "" ? true : dis === true ? true : false}
          >
            {dis === false ? "Add to card" : "Added"}
          </button>
          <hr />
          <div className="descShow">
            <h5>Description</h5>
            <span onClick={showHide}>
              {descHide === "hide" ? <Plus /> : <Minus />}
            </span>
          </div>

          <hr />
          <div className={descHide}>
            <h6>ABOUT THE PRODUCT</h6>
            <p>
              Our T-Shirts are lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
            <ul>
              <li>
                <Check />
                100% Cotton
              </li>
              <li>
                <Check />
                260gsm
              </li>
              <li>
                <Check />
                Breathable Fabric
              </li>
            </ul>
            <hr />
            <h6>SIZE & FIT</h6>
            <ul>
              <li>
                <Check />
                Model is wearing size M and is 6'1"
              </li>
              <li>
                <Check />
                Standard fit for a relaxed, easy feel
              </li>
            </ul>
            <hr />
            <h6>FREE DELIVERY & RETURNS</h6>
            <ul>
              <li>
                <Check />
                You can return your order for any reason, free of charge, within
                30 days
              </li>
              <li>
                <Check />
                We also offer a Free-of-Charge shipping label
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="bestseller">Bestseller products</h2>
      <div className="otherProducts">
        {othetData.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              rating={item.rating}
              price={item.price}
              image={item.image}
              title={item.title}
              details={"women-detail"}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default WomenDetails;
