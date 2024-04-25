import { Link } from "react-router-dom";
import { AppContext } from "../../Context/Context";
import { useContext } from "react";
import Navigations from "../../Components/Navigations/Navigations";

const Home = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <div>
      {/* <div
        className={`h-80 w-1/2 rounded-md shadow-lg ${darkMode && "bg-white"}`}
      ></div> */}
      <Navigations />
      <Link to="world">Click to world</Link>
    </div>
  );
};

export default Home;
