import { Link } from "react-router-dom";
import { AppContext } from "../../Context/Context";
import { useContext } from "react";
import Hero from "../../Components/Home_Hero/Hero";

const Home = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <div>
      {/* <div
        className={`h-80 w-1/2 rounded-md shadow-lg ${darkMode && "bg-white"}`}
      ></div> */}
      <Hero />
    </div>
  );
};

export default Home;
