import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";


const WomensProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/get-womens").then((res) => {
      setData(res.data.data);
    });
  },[]);
  return (
    <div>
      <Header />
      <div className="products">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              rating={item.rating}
              price={item.price}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              details={"women-detail"}
              addIdWomenMen={12}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default WomensProducts;