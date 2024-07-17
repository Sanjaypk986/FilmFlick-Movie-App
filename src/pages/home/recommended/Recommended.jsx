import React, { useEffect, useState } from "react";
import MovieCard from "../../../components/MovieCard";
import axios from "axios";

const Recommended = () => {
    const [movies, setMovies] = useState([]);
    const [visibleMovies,setVisibleMovies] = useState(5)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/movies`);
                const movies = response.data;
                setMovies(movies);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const loadMoreMovies = () => {
        setVisibleMovies(prev => prev + 5);
      };
      const loadLessMovies = ()=> {
        setVisibleMovies(prev => prev - 5);
      }
    return (
        <section className="bg-gray-200">
            <div className="container mx-auto px-2 mt-3 py-4">
                <h3 className="text-lg md:text-xl lg:text-xxl font-semibold pb-4">
                    Recommended For You...
                </h3>
                <div className="pb-4 grid grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
                    {movies.length > 0 ? (
                        movies.slice(0, visibleMovies).map((movie) => (
                            <MovieCard key={movie._id} movie={movie} />
                            
                        ))
                    ) : (
                        <p>Loading movies...</p>
                    )}
                </div>
                <div className="flex justify-center items-center ">
            {visibleMovies < movies.length && (
              <button
                onClick={loadMoreMovies}
                className="border bg-gray-600 text-white hover:bg-gray-700 text-sm px-2 py-2 rounded-md mt-4 mx-3"
              >
                Load More
              </button>
            )}
            {visibleMovies > 5 && (
              <button
                onClick={loadLessMovies}
                className="border bg-gray-600 hover:bg-gray-700 text-white text-sm px-2 py-2 rounded-md mt-4 mx-3"
              >
                Show less
              </button>
            )}
          </div>
            </div>
        </section>
    );
};

export default Recommended;
