import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <section className="">
        <Navbar />
        <div>{<Outlet />}</div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
