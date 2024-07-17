import React, { useEffect, useRef, useState } from 'react';
import MovieCard from '../../../components/MovieCard';
import axios from 'axios';

const UpComing = () => {
    const [upcoming, setUpcoming] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/upcoming`);
                const movies = response.data;
                setUpcoming(movies);
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
                {upcoming.length > 0 ? (
                    upcoming.map((movie) => (
                        <div key={movie._id} className="min-w-[200px] sm:min-w-[240px]"> {/* Added: Responsive fixed width */}
                            <MovieCard 
                                movie={movie} 
                                isUpcoming={true} // Changed: passing movie and isUpcoming props
                            />
                        </div>
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
