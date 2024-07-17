import React, { useEffect, useState } from "react";
import "../../movie/MoviePage.css";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Recommended from "../recommended/Recommended";

export async function loader({ params }) {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/upcoming/${params.movieId}`
  );
  const movie = response.data;

  return { movie };
}
const UpcomingMoviePage = () => {

  const dispatch = useDispatch();
  // received movie from loader
  const { movie } = useLoaderData();

  return (
    <main>
      <section
        className="h-128 w-full bg-cover relative bg-center overflow-hidden my-2"
        style={{
          backgroundImage: `url(${movie.poster})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 transition duration-300 ease-in-out"></div>
        <div className="grid inset-0 absolute grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
          <div className="cols-span-1 flex justify-center items-center">
            <img
              className="h-72 md:h-96 max-w-64 rounded-md  shadow-lg "
              src={movie.thumbnail}
              alt="movie-image"
            />
          </div>
          <div className="cols-span-1 flex flex-col gap-3 justify-center items-center sm:items-start whitespace-nowrap">
            <h2 className="text-gray-200 font-bold text-xl md:text-4xl sm:my-2 tracking-wide">
              {movie.title}
            </h2>
            <p className="py-1 rounded-md text-xs sm:text-sm md:text-base px-2 bg-gray-200 sm:my-2">
              {/* join(", ") concatenates the array elements with a comma and space separator (", "),  */}
        {movie.language.join(", ")} 
            </p>
            <p className="py-1 rounded-md px-2 text-xs sm:text-sm md:text-base  text-white font-semibold sm:my-2">
              <span>{movie.duration}</span> • <span>{movie.genre.join(", ")}</span>
            </p>
            <p className="py-1 rounded-md px-2 text-xs sm:text-sm md:text-base  text-white font-semibold sm:my-2">Releasing Date : <span>{movie.releasingDate}</span></p> 
            <Link className=" links w-1/2 rounded-lg text-center py-2 px-3 font-semibold  sm:my-2">
              Book Ticket
            </Link>
          </div>
          <div></div>
        </div>
      </section>
      <section className="container mx-auto mt-4 px-2 ">
        <div className="border-b-2 pb-5">
          <h3 className="text-lg md:text-2xl  text-gray-800 font-semibold my-2 md:my-4">
            About the movie
          </h3>
          <p className="text-xs sm:text-sm md:text-base my-1 px-2 text-justify text-gray-700">
            {movie.description}
          </p>
        </div> 
      </section>
      <section className="">
        <div className="container mx-auto px-2 mt-3 py-4">
          <h3 className="text-lg md:text-xl text-gray-800 lg:text-xxl font-semibold pb-4">
            Related movies
          </h3>
          <Recommended />
        </div>
      </section>
    </main>
  );
};

export default UpcomingMoviePage;
