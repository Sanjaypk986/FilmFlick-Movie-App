import React from 'react';

const ReviewCard = ({review}) => {
  return (
    <article className='bg-gray-200 p-4 overflow-hidden rounded-md'>
      <h5 className='text-sm md:text-base font-semibold text-gray-700'>{review.title}</h5>
      <p className='text-xs sm:text-sm mt-2 w-50 text-gray-600 text-justify'>
        {review.description}
      </p>
    </article>
  );
};
export default ReviewCard