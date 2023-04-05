import React from "react";
import { Link } from "react-router-dom";

const Book = ({ image, subtitle, price, title, isbn13 }) => {
  return (
    <Link to={`../book/${isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-5">
        <img
          src={image}
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          alt=""
        />
        <div className="flex flex-col bg-black bg-opacity-75 opacity-0 p-4 hover:opacity-100 text-gray-50 absolute inset-0 transition-opacity duration-200">
          <p className="text-2xl">{title}</p>
          <br />
          <p>{subtitle}</p>
          <br />
          <p className="mt-auto text-xl">Price:{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
