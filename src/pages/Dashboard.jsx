// ? Components
import Header from "../components/Header";
import Slider from "../components/Slider";
import HR from "../components/HR";
import WomensCollection from "../components/WomensCollection";
import Review from "../components/Review";
import MensWomens from "../components/MensWomens";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";

const Dashboard = ({ setUser }) => {
  // const navigate = useNavigate()
  return (
    <div>
      <Header setUser={setUser} />
      <h2 className="h2">OUR SUMMER COLLECTION</h2>
      <h3 className="h3">WE ARE THE BEST</h3>
      <Slider />
      <HR />
      <WhyUs/>
      <div className="break"></div>
      <WomensCollection />
      <Review />
      <MensWomens />
      <Footer/>
    </div>
  );
};
export default Dashboard;
