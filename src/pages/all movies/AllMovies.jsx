import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import MovieCard from "../../components/MovieCard";

export async function loader({ params, request }) {
  const url = new URL(request.url);
  const selectedLanguage = url.searchParams.get("language");
  let movieUrl;
  if (selectedLanguage) {
    movieUrl = `http://localhost:3000/movies?language=${selectedLanguage}`;
  } else {
    movieUrl = "http://localhost:3000/movies";
  }
  const response = await axios.get(movieUrl);
  const movies = response.data;
  return { movies };
}

const AllMovies = () => {
  const navigate = useNavigate();
  const { movies } = useLoaderData();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languages = [
    "English",
    "Malayalam",
    "Tamil",
    "Hindi",
    "Telugu",
    "Show-All",
  ];

  const handleLanguage = (language) => {
    if (language) {
      setSelectedLanguage(language);
      if (language === "Show-All") {
        navigate("/movies");
      } else {
        const url = `/movies?language=${language}`;
        navigate(url);
      }
    }
  };

  return (
    <main>
      <section className="container mx-auto my-3 px-2">
        <div className="grid mx-auto grid-cols-1   sm:gap-4 p-1 ">
          <div className="col-span-1 p-2  rounded-md">
            <h5 className="text-lg md:text-2xl text-center text-gray-700 font-semibold my-2 md:my-4">
              Movies
            </h5>

            <div className="flex flex-wrap gap-2 justify-center my-3 py-3">
              {languages.map((language) => (
                <button
                  key={language}
                  onClick={() => handleLanguage(language)}
                  className={`px-2 md:px-4 py-2 rounded border   text-xs md:text-base  ${
                    selectedLanguage === language
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-600"
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-2 px-3">
            <p className="text-xs md:text-base text-gray-700">
              Language: {selectedLanguage}
            </p>
            <div className="mt-3 py-4">
              <div className="pb-4 grid grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
                {movies ? (
                  movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} />
                  ))
                ) : (
                  <p>Loading movies...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllMovies;
