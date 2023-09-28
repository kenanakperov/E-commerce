import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

const MenProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/get-mens").then((res) => {
      setData(res.data.data);
    });
  }, []);
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
              details={"men-details"}
              addIdWomenMen = {0}
              post={"postId"}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default MenProducts;
