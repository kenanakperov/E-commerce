import { useNavigate } from "react-router-dom"


const MensWomens = () => {
    const navigate = useNavigate()
  return (
    <div className="mensWomensParent">
      <div onClick={()=>{navigate("/menProducts");}} className="mensWomens">
        <img src={require("../images/tony.jpg")} alt="img-1" />
        <div className="img-desc">
          <span>MEN</span>
        </div>
      </div>
      <div onClick={()=>{navigate("/womenProducts");}} className="mensWomens">
        <img src={require("../images/carmela-02.webp")} alt="img-1" />
        <div className="img-desc">
          <span>WOMEN</span>
        </div>
      </div>
    </div>
  );
}

export default MensWomens