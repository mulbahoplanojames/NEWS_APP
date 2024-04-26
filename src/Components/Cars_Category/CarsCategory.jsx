import { Link } from "react-router-dom";

const CarsCategory = () => {
  return (
    <>
      <h1>CarsCategory</h1>
      <Link to={"/home"}>
        <h1 className="text-3xl">All Category</h1>
      </Link>
    </>
  );
};

export default CarsCategory;
