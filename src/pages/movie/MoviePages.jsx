import React, { useEffect, useState } from "react";
import "./MoviePage.css";
import { Link, useLoaderData } from "react-router-dom";
import ReviewCard from "../../components/ReviewCard";
import axios from "axios";
import ReviewForm from "../../components/forms/ReviewForm";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../features/reviews/reviewSlice";
import Recommended from "../home/recommended/Recommended";

export async function loader({ params }) {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/movies/${params.movieId}`
  );
  const movie = response.data;

  return { movie };
}
const MoviePage = () => {
  // for review
  const [visibleReviews, setVisibleReviews] = useState(4);
  // loggedin or not
  const isLoggedIn = useSelector((state) => state.login.isLogin);
  // reviews state
  const reviews = useSelector((state) => state.review.reviews);
  const dispatch = useDispatch();
  // received movie from loader
  const { movie } = useLoaderData();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/reviews?movie=${movie._id}`,
          { withCredentials: true }
        );
        const reviews = response.data;
        // Dispatch reviews to Redux store
        dispatch(addReview(reviews));
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [movie, dispatch]);

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 4);
  };
  const loadLessReviews = () => {
    setVisibleReviews(4);
  };
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
            <div className="hidden sm:flex bg-neutral-700 text-xs sm:text-sm md:text-base sm-text p-1 sm:py-3 rounded-lg md:px-4 font-semibold w-full text-gray-200 flex justify-between items-center ">
              <span>
                Rating{" "}
                <span className="mx-2">
                  <i className="fa-solid fa-star text-red-400"></i>
                </span>
                5/10
              </span>
              {isLoggedIn ? (
                <a
                  href="#add-review"
                  className="bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-2 text-gray-800"
                >
                  Add Review
                </a>
              ) : (
                <Link
                  to={"/login"}
                  className="bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-2 text-gray-800"
                >
                  Add Review
                </Link>
              )}
            </div>
            <p className="py-1 rounded-md text-xs sm:text-sm md:text-base px-2 bg-gray-200 sm:my-2">
              {/* join(", ") concatenates the array elements with a comma and space separator (", "),  */}
              {movie.language.join(", ")}
            </p>
            <p className="py-1 rounded-md px-2 text-xs sm:text-sm md:text-base  text-white font-semibold sm:my-2">
              <span>{movie.duration}</span> •{" "}
              <span>{movie.genre.join(" ")}</span> •{" "}
              <span>{movie.releaseDate}</span>
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
          <h3 className="text-lg md:text-2xl  text-gray-800 font-semibold my-2 md:my-4">
            About the movie
          </h3>
          <p className="text-xs sm:text-sm md:text-base my-1 px-2 text-justify text-gray-700">
            {movie.description}
          </p>
        </div>
        {isLoggedIn && (
          <div id="add-review">
            <h3 className="text-lg md:text-2xl  text-gray-800 font-semibold my-2 md:my-4">
              Add reviews
            </h3>
            <ReviewForm movieId={movie._id} />
          </div>
        )}
        <div className="border-b-2 pb-5 flex flex-col justify-center items-center">
          <h3 className="text-lg md:text-2xl text-gray-800 font-semibold my-2 md:my-4">
            Top reviews
          </h3>
          <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {reviews.slice(0, visibleReviews).map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
          <div className="flex justify-center items-center ">
            {visibleReviews < reviews.length && (
              <button
                onClick={loadMoreReviews}
                className="border bg-gray-600 text-white hover:bg-gray-700 text-sm px-2 py-2 rounded-md mt-4 mx-3"
              >
                Load More
              </button>
            )}
            {visibleReviews > 4 && (
              <button
                onClick={loadLessReviews}
                className="border bg-gray-600 hover:bg-gray-700 text-white text-sm px-2 py-2 rounded-md mt-4 mx-3"
              >
                Show less
              </button>
            )}
          </div>
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

export default MoviePage;
