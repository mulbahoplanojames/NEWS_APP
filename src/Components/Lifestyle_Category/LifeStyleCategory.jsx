import { Link } from "react-router-dom";

const LifeStyleCategory = () => {
  return (
    <>
      <h1>LifeStyleCategory</h1>
      <Link to={"/home"}>
        <h1 className="text-3xl">All Category</h1>
      </Link>
    </>
  );
};

export default LifeStyleCategory;
