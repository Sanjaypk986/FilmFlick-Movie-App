import React, { useState } from 'react';

const ReviewCard = ({ review }) => {
  const [showFullReview, setShowFullReview] = useState(false);


  if (!review || !review.user) {
    return null; 
  }

  const toggleReview = () => {
    setShowFullReview(!showFullReview);
  };

  // Limiting the review content to show initially
  const limitedContent = review.description.slice(0, 200);

  return (
    <article className='bg-gray-200 flex flex-col justify-between p-4 overflow-hidden rounded-md' style={{ maxHeight: '500px', overflow: 'hidden' }}>
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
      <p className='text-sm sm:text-base mt-2 w-50 text-gray-800 text-end'>-{review.user.name}</p>
    </article>
  );
};

export default ReviewCard;
