import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview, updateReview } from "../features/reviews/reviewSlice";

const ReviewCard = ({ review }) => {
  const [showFullReview, setShowFullReview] = useState(false);
  const [edit, setEdit] = useState(false);
  const [reviewMenu, setReviewMenu] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(review.title);
  const [updatedDescription, setUpdatedDescription] = useState(review.description);
  const dispatch = useDispatch();

  const loginUserId = useSelector((state) => state.login.loggedUserId);
  const isReviewOwner = loginUserId === review.user._id;

  if (!review || !review.user) {
    return null;
  }

  const toggleReview = () => setShowFullReview(!showFullReview);
  const limitedContent = review.description.slice(0, 200);

  const handleReviewOption = () => setReviewMenu(!reviewMenu);

  const handleReviewDelete = async () => {
    setReviewMenu(!reviewMenu);
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/reviews/${review._id}`,
        { withCredentials: true }
      );
      dispatch(deleteReview(review._id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const handleReviewEdit = () => {
    setReviewMenu(!reviewMenu);
    setEdit(!edit);
  };

  const handleEditedData = async (e) => {
    e.preventDefault();

    const updatedItem = {
      title: updatedTitle,
      description: updatedDescription,
    };

    try {
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/reviews/${review._id}`,
        updatedItem,
        { withCredentials: true }
      );

      dispatch(updateReview({
        _id: review._id,
        updatedReview: updatedItem
      }));

      setEdit(false);
    } catch (error) {
      console.error("Error updating review:", error);
      alert("An error occurred while updating the review. Please try again.");
    }
  };

  return (
    <article className="border shadow-md bg-white flex flex-col justify-start gap-3 p-4 rounded-md relative">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-3">
          <img src="https://in.bmscdn.com/in/synopsis-new/noimguser.jpg" className="w-9 h-9" alt="user logo" />
          <p className="text-sm sm:text-base w-50 text-gray-800 text-end">{review.user.name}</p>
        </div>
        {isReviewOwner && (
          <div className="relative">
            <span onClick={handleReviewOption} className="cursor-pointer text-gray-600 hover:text-gray-800">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
            {reviewMenu && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="flex flex-col text-xs md:text-sm py-2">
                  <li>
                    <button className="w-full text-gray-600 hover:bg-gray-200 block px-2" onClick={handleReviewDelete}>
                      Delete
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-gray-600 hover:bg-gray-200 block px-2" onClick={handleReviewEdit}>
                      Edit
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      {!edit ? (
        <div className="overflow-hidden">
          <h5 className="text-sm md:text-base font-semibold text-gray-700">{updatedTitle}</h5>
          <p className="text-xs sm:text-sm mt-2 w-50 text-gray-600 text-justify break-words">
            {showFullReview ? updatedDescription : limitedContent}
            {!showFullReview && updatedDescription.length > 200 && (
              <button onClick={toggleReview} className="text-blue-500 mx-2 hover:underline focus:outline-none">
                Read More
              </button>
            )}
            {showFullReview && (
              <button onClick={toggleReview} className="text-blue-500 mx-2 hover:underline focus:outline-none">
                Show less
              </button>
            )}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <form onSubmit={handleEditedData} className="flex flex-col gap-2">
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="block w-full p-2 border text-gray-600 rounded-md focus:outline-none focus:border-gray-500"
              placeholder="Title"
            />
            <textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              className="mt-1 block w-full p-2 text-gray-600 border rounded-md focus:outline-none focus:border-gray-500 break-words"
              placeholder="Description"
              rows="5"
            />
            <button type="submit" className="w-full sm:w-auto px-4 py-2 border bg-gray-600 text-white hover:bg-gray-700 rounded-md hover:bg-blue-600 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      )}
    </article>
  );
};

export default ReviewCard;
