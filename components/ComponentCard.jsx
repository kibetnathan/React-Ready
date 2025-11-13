import React from "react";
import { Link } from "react-router-dom";

function ComponentCard({ name, description, tutorial, image }) {
  return (
    <div className="max-w-sm max-h-fit bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 md:w-[300px]">
      <img
        className="w-full object-cover"
        src={image} // dynamic image
        alt={name}
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg text-blue-500">Difficulty: Default</span>
          <Link to={`/${tutorial}`}>
            <button className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:outline-1 hover:outline-blue-600 hover:cursor-pointer text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
              Try it
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComponentCard;
