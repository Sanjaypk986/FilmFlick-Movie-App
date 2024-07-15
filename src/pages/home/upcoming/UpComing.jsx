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

                <div className="relative">
                    <button
                        className="absolute mx-2 left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full z-10"
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
                        className="absolute mx-2 right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full z-10"
                        onClick={scrollRight}
                    >
                        &#8594;
                    </button>
                </div>
    );
};

export default UpComing;
