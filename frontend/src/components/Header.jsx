import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="flex justify-between align-middle m-2 p-4 bg-white rounded-md shadow-md bg-gray-50">
      <Link to="/">
        <h1 className="text-2xl text-gray-500 uppercase">Books Catalog</h1>
      </Link>
    </div>
  );
};

export default Header;
