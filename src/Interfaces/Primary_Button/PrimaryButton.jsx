import { Link } from "react-router-dom";

const PrimaryButton = ({ text, path }) => {
  return (
    <>
      <Link to={path}>
        <button className="hover:bg-blue-600 px-8 py-1 font-bold text-white bg-blue-400 rounded">
          {text}
        </button>
      </Link>
    </>
  );
};

export default PrimaryButton;
