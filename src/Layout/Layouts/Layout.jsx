import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
	return (
		<>
			<Navbar />
			<div>{<Outlet />}</div>
			<Footer />
		</>
	);
};

export default Layout;
