import { Outlet } from "react-router-dom";
import Hero from "../../Components/Home_Hero/Hero";
import CategoryNavigation from "../../Components/Category_Navigation/CategoryNavigation";
// import TopCategories from "../../Components/Top_Categories/TopCategories";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryNavigation />
      <div className="">{<Outlet />}</div>
      <div className="w-[600px] h-[500px] bg-red-400 mt-5"></div>
    </div>
  );
};

export default Home;
