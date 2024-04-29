import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layouts/Layout";
import Home from "./Pages/Home/Home";
import World from "./Pages/World/World";
import Login from "./Pages/Login/Login";
import TopCategories from "./Components/Top_Categories/TopCategories";
import FoodCategory from "./Components/Food_Category/FoodCategory";
import CarsCategory from "./Components/Cars_Category/CarsCategory";
import LifeStyleCategory from "./Components/Lifestyle_Category/LifeStyleCategory";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />}>
              <Route index element={<TopCategories />} />
              <Route path="food-category" element={<FoodCategory />} />
              <Route path="cars-category" element={<CarsCategory />} />
              <Route
                path="lifestyles-category"
                element={<LifeStyleCategory />}
              />
            </Route>

            <Route path="world" element={<World />} />
          </Route>

          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
