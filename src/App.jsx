import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layouts/Layout";
import Home from "./Pages/Home/Home";
import World from "./Pages/World/World";
import Login from "./Pages/Login/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="world" element={<World />} />
          </Route>

          <Route path="/local" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
