import { Outlet } from "react-router-dom";
import { useContext } from "react";

// Layout components for all pages
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AppContext } from "../../COntext/Context";

const Layout = () => {
  const { darkModeStyle } = useContext(AppContext);

  return (
    <>
      <section
        className="md:px-16 w-screen h-screen px-6"
        style={darkModeStyle}
      >
        <Navbar />
        <div>{<Outlet />}</div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
