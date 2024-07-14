import React, { useEffect, useRef, useState } from 'react';
import MovieCard from '../../../components/MovieCard';
import axios from 'axios';

const UpComing = () => {
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
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <section className="">
            <div className="container mx-auto px-2 mt-3 py-4">
                <h3 className="text-lg md:text-xl lg:text-xxl font-semibold pb-4">
                    Upcoming Movies
                </h3>
                <div className="relative">
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-md z-10"
                        onClick={scrollLeft}
                    >
                        &#8592;
                    </button>
                    <div
                        ref={scrollContainerRef}
                        className="pb-4 grid grid-flow-col auto-cols-max gap-2 sm:gap-4 overflow-x-auto scrollbar-hide"
                    >
                       {movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCard key={movie._id} movie={movie} />
                        ))
                    ) : (
                        <p>Loading movies...</p>
                    )}
                    </div>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-md z-10"
                        onClick={scrollRight}
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UpComing;
