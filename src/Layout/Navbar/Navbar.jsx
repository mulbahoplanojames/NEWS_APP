import { MdOutlineMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Swap from "../../Components/Swap/Swap";

/**
 * @function Navbar
 * @description The navbar component. It renders the app's navbar.
 */
const Navbar = () => {
  return (
    <>
      <nav className=" flex items-center justify-between py-6">
        {/* The menu icon */}
        <MdOutlineMenu className="text-3xl cursor-pointer" />
        {/* The app's name */}
        <h1 className="text-2xl">
          Just<span className="text-blue-500">News</span>
        </h1>
        {/* The search bar and toggle theme button */}
        <div className="flex items-center gap-4">
          <FaSearch className="text-xl cursor-pointer" />
          <Swap />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
