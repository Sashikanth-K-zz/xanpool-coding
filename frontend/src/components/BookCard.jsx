import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <Link to={`/books/${props.data.bookid}`}>
      <div className="flex flex-row justify-between shadow-md p-4 hover:bg-blue-200 rounded-lg border m-1">
        <h1>{props.data.title}</h1>
        <h1 className="font-thin text-sm">{props.data.year}</h1>
      </div>
    </Link>
  );
};

export default BookCard;
