import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return null;
  }


  return (
    <article className="p-1 rounded-lg shadow-lg bg-white flex flex-col items-center">
      <Link to={`/movies/${movie._id}`} className="w-full">
      <img
        className="rounded-md w-full max-h-80"
        src={movie.thumbnail}
        alt="Movie image"
      />
      </Link>
      <h3 className="text-xs sm:text-base font-semibold mt-3 text-gray-700 text-center h-8 overflow-hidden">
        {movie.title}
      </h3>
      <p className="text-xs sm:text-sm my-1 text-gray-600 text-center h-6 overflow-hidden max-w-full truncate">
      {/* join(", ") concatenates the array elements with a comma and space separator (", "),  */}
        {movie.language.join(", ")} 
      </p>
    </article>
  );
};

export default MovieCard;
