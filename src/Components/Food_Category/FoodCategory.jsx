import { Link } from "react-router-dom";

const FoodCategory = () => {
  return (
    <>
      <h1>FoodCategory</h1>
      <Link to={"/home"}>
        <h1 className="text-3xl">All Category</h1>
      </Link>
    </>
  );
};

export default FoodCategory;
