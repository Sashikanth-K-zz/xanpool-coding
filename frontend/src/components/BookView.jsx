import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

const BookView = () => {
  const { bookId } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchBook = async () => {
    try {
      let data = await axios.get(`/books/${bookId}`);
      if (data && data.status == 200 && data.data && data.data.length > 0) {
        setBook(data.data[0]);
      } else {
        setErrorMessage(data.data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setBook(null);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="flex flex-col items-center  p-6  ">
      <h1> Book overview</h1>
      {book ? (
        <div className="flex flex-col items-center space-y-6 p-6 border rounded-md border-l-8 border-blue-100 shadow-sm ">
          <h1 className="text-3xl text-green-500 ">{book.title}</h1>
          <h1 className="font-thin">{book.year}</h1>
          <h1 className="leading-relaxed ">{book.description}</h1>
        </div>
      ) : (
        <div className="flex flex-row justify-center ">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10 mr-3"></div>
        </div>
      )}
    </div>
  );
};

export default BookView;
