import React from "react";
import "./MoviePage.css";
import { Link } from "react-router-dom";

const MoviePage = () => {
  return (
    <main>
      <section
        className="h-128 w-full bg-cover relative bg-center overflow-hidden my-2"
        style={{
          backgroundImage:
            "url('https://www.deccanchronicle.com/h-upload/2024/06/12/1096545-gpysqlvwuaagvsm.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 transition duration-300 ease-in-out"></div>
        <div className="grid inset-0 absolute grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
          <div className="cols-span-1 flex justify-center items-center">
            <img
              className="h-72 md:h-96 max-w-64 rounded-md  shadow-lg "
              src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg"
              alt=""
            />
          </div>
          <div className="cols-span-1 flex flex-col gap-3 justify-center items-center sm:items-start whitespace-nowrap">
            <h2 className="text-gray-200 font-bold text-xl md:text-4xl sm:my-2 tracking-wide">
              Kalki 2898 AD
            </h2>
            <div className="hidden sm:flex bg-neutral-700 text-xs sm:text-sm md:text-base sm-text p-1 sm:py-3 rounded-lg md:px-4 font-semibold w-full text-gray-200 flex justify-between items-center ">
              <span>Rating -: 5/10</span>
              <Link className="bg-gray-200 rounded-lg px-3 py-2 text-gray-800">
                Add Review
              </Link>
            </div>
            <p className="py-1 rounded-md text-xs sm:text-sm md:text-base px-2 bg-gray-200 sm:my-2">
              Telugu , Malayalam , Hindi , Tamil , Kannada
            </p>
            <p className="py-1 rounded-md px-2 text-xs sm:text-sm md:text-base  bg-gray-200 sm:my-2">
              3h 1m • Action , Sci-Fi , Thriller • 27 Jun, 2024
            </p>
            <Link className=" links w-1/2 rounded-lg text-center py-2 px-3 font-semibold  sm:my-2">
              Book Ticket
            </Link>
          </div>
          <div></div>
        </div>
      </section>
      <section className="container mx-auto mt-4 px-2 ">
        <div className="border-b-2 pb-5">
          <h3 className="text-lg md:text-2xl  text-gray-700 font-semibold my-2 md:my-4">
            About the movie
          </h3>
          <p className="text-xs sm:text-sm md:text-base my-1 px-2 text-justify text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            excepturi saepe aliquam molestiae natus nihil in minima repudiandae,
            veritatis, officiis doloribus deserunt numquam quisquam deleniti,
            possimus hic eum exercitationem? Asperiores!
          </p>
        </div>
        <div className="border-b-2 pb-5">
        <h3 className="text-lg md:text-2xl  text-gray-700 font-semibold my-2 md:my-4">
            Top reviews
          </h3>
        </div>
      </section>
    </main>
  );
};

export default MoviePage;
