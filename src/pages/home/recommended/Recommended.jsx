import React from "react";
import MovieCard from "../../../components/MovieCard";


const Recommended = () => {
  return (
    <section className="container mx-auto px-2">
        <h3 className="text-lg md:text-xl lg:text-xxl font-semibold my-2">Recommended For You...</h3>
      <div className=" grid grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};

export default Recommended;
