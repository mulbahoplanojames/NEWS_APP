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
    </div>
  );
};

export default Home;
