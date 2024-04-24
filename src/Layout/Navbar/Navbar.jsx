import { MdOutlineMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav>
        <MdOutlineMenu />
        <h1>
          Just <span>News</span>
        </h1>
        <div className="">
          <FaSearch />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
