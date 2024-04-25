import { MdOutlineMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Swap from "../../Components/Swap/Swap";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <MdOutlineMenu className="text-3xl cursor-pointer" />
        <h1 className="text-2xl">
          Just<span className="text-blue-500">News</span>
        </h1>
        <div className="flex items-center gap-4">
          <FaSearch className="text-2xl cursor-pointer" />
          <Swap />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
