import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const BookList = (props) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchBooks = async () => {
    try {
      let data = await axios.get("/books");
      if (data && data.status == 200) {
        setBooks(data.data);
      } else {
        setErrorMessage(data.data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setBooks([]);
      setErrorMessage(error.message);
    }
  };

  const renderList = () => {
    return books.map((b) => {
      return <BookCard data={b} />;
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3   justify-centers p-5">
      {loading ? (
        <div className="flex flex-row justify-center ">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10 mr-3"></div>
        </div>
      ) : (
        renderList()
      )}
    </div>
  );
};

export default BookList;
