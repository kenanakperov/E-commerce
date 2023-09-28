import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const AddCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/cart").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
      <div>
          <Header/>
      {data.map((item,index) => {
        return (
          <Card
            key = {index}
            image={item.image}
            rating={item.rating}
            price={item.price}
            title={item.title}
            description={item.description}
            category={item.category}
            details={"men-details"}
            post={"postId"}
          />
        );
      })}
          <Footer/>
    </div>
  );
};

export default AddCard;