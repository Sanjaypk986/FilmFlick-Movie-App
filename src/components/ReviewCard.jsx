import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../features/reviews/reviewSlice';

const ReviewCard = ({ review }) => {
  const [showFullReview, setShowFullReview] = useState(false);
  const[reviewMenu,setReviewMenu] = useState(false)
  const dispatch = useDispatch()

  const loginUserId = useSelector((state) => state.login.loggedUserId);
  console.log(loginUserId);
  const isReviewOwner = loginUserId === review.user._id

  if (!review || !review.user) {
    return null;
  }

  const toggleReview = () => {
    setShowFullReview(!showFullReview);
  };
  // Limiting the review content to show initially
  const limitedContent = review.description.slice(0, 200);

  // handle review menu function
  const handleReviewOption =()=>{
    setReviewMenu(!reviewMenu)
  }

  const handleReviewDelete = async()=>{
    console.log("delete");
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/reviews/${review._id}`, {
        withCredentials: true,
      });
      // filter with id and create new array with out the same id item
      dispatch(deleteReview(review._id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  }
  return (
    <article className='border shadow-md bg-white flex flex-col justify-start gap-3 p-4 overflow-hidden rounded-md' style={{ maxHeight: '500px', overflow: 'hidden' }}>
      <div className='flex justify-between items-center mb-1'>
        <div className='flex items-center gap-3'>
        <img src="https://in.bmscdn.com/in/synopsis-new/noimguser.jpg" className='w-9 h-9' alt="user logo" />
        <p className='text-sm sm:text-base  w-50 text-gray-800 text-end'>{review.user.name}</p>
        </div>
        {
          isReviewOwner&&
          <div className='relative'>
        <span onClick={handleReviewOption} className='cursor-pointer text-gray-600 hover:text-gray-800'><i className="fa-solid fa-ellipsis-vertical "></i></span>
        {
          reviewMenu &&
          <div className='absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg'>
              <ul className='flex flex-col text-xs md:text-sm py-2'>
                <li>
                  <button className='w-full text-gray-600 hover:bg-gray-200 block px-2 ' onClick={handleReviewDelete}>
                    Delete
                  </button>
                </li>
                <li>
                  <button className='w-full text-gray-600 hover:bg-gray-200 block px-2 ' onClick={()=>alert("Edit")}>
                    Edit
                  </button>
                </li>
              </ul>
          </div>
        }
        </div>
        }
      </div>
      <div>
      <h5 className='text-sm md:text-base font-semibold text-gray-700'>{review.title}</h5>
      <p className='text-xs sm:text-sm mt-2 w-50 text-gray-600 text-justify'>
        {showFullReview ? review.description : limitedContent}
        {!showFullReview && review.description.length > 200 && (
          <button onClick={toggleReview} className='text-blue-500 mx-2 hover:underline focus:outline-none'>
            Read More
          </button>
        )}
        {
          showFullReview && <button onClick={toggleReview} className='text-blue-500 mx-2 hover:underline focus:outline-none'>
          Show less
        </button>
        }
      </p>
      </div>
      
    </article>
  );
};

export default ReviewCard;
