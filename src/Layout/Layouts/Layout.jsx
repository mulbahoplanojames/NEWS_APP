import { Outlet } from "react-router-dom";
import { useContext } from "react";

// Layout components for all pages
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

/**
 *@description This is a the AppContext component that is createtd as a global context to store
 * and share global data to all components. I this component i am accessing the `darkModeStyle`
 * from the `AppContext`
 */
import { AppContext } from "../../Context/Context";

/**
 *@description This is the Layout component for all pages. This component will
 * render the Navbar, the Outlet for the current route, and the Footer component.
 * This component also accesses the `darkModeStyle` object from the `AppContext`
 * component to set the background color and text color of the page based on the `darkMode` state.
 */
const Layout = () => {
  const { darkModeStyle } = useContext(AppContext);

  return (
    // The main section of the page. This is the container for all the page content.
    <section className="md:px-16 w-screen h-screen px-3" style={darkModeStyle}>
      {/* The Navbar component */}
      <Navbar />
      {/* The Outlet component that will render the current route. */}
      <div>{<Outlet />}</div>
      {/* The Footer component */}
      <Footer />
    </section>
  );
};

export default Layout;
