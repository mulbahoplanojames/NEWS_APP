import React from "react";
import { Link } from "react-router-dom";

const TopCategories = () => {
  return (
    <>
      <h1>TopCategories</h1>
      <Link to={"food-category"}>
        <h1 className="text-3xl">Food Category</h1>
      </Link>
    </>
  );
};

export default TopCategories;
