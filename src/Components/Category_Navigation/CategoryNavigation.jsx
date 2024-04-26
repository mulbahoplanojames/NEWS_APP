import { Link } from "react-router-dom";
import { ALL_CATEGORIES_LINKS } from "../../Constant/Constant";

const CategoryNavigation = () => {
  return (
    <>
      <nav className=" mb-7 flex items-center justify-between pb-4 border-b-2 border-gray-300">
        <h1 className="text-xl font-extrabold uppercase">Top Categories</h1>
        <menu className="md:gap-8 flex items-center gap-5">
          {ALL_CATEGORIES_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="focus:text-red-500 focus:border-b-2 focus:border-red-600 active:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </menu>
      </nav>
    </>
  );
};

export default CategoryNavigation;
