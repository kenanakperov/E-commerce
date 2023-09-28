import { Star } from "../svg";
import { useNavigate } from "react-router-dom";

const Card = ({
  details,
  title,
  image,
  id,
  price,
  rating,
  addIdWomenMen,
  post,
  category,
  description,
}) => {
  const navigate = useNavigate();
  const detail = () => {
    localStorage.setItem("detail", JSON.stringify(id));
    navigate(`/${details}/${id}`);
  };
  // const sendId = () => {
  //   axios.post(`http://localhost:3003/cart/${id + addIdWomenMen}`, { id });
  //   setDis(true);
  // };
  return (
    <div className="card">
      <figure>
        <img className="ttImage" src={image} alt="t-shirt" />
      </figure>
      <div className="details">
        <div className="min-details">
          <h1>
            {title?.slice(0, 10)}...{" "}
            <span>
              {rating.rate}
              <Star />
            </span>
          </h1>
          <h1 className="price">${price}</h1>
        </div>
        <div className="options">
          <div className="options-size">
            <h1>sizes</h1>
            <ul>
              <li>xs</li>
              <li>s</li>
              <li>m</li>
              <li>l</li>
              <li>xl</li>
            </ul>
          </div>
        </div>
        <button onClick={detail} className="btn">
          Add to card
        </button>
        <button onClick={detail} className="btnDetails">
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
