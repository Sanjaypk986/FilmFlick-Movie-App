import React, { useEffect, useState } from "react";
import MovieCard from "../../../components/MovieCard";
import axios from "axios";

const Recommended = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/movies');
                const movies = response.data;
                setMovies(movies);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="bg-gray-200">
            <div className="container mx-auto px-2 mt-3 py-4">
                <h3 className="text-lg md:text-xl lg:text-xxl font-semibold pb-4">
                    Recommended For You...
                </h3>
                <div className="pb-4 grid grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCard key={movie._id} movie={movie} />
                        ))
                    ) : (
                        <p>Loading movies...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Recommended;
