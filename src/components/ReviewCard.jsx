import React from 'react';

const ReviewCard = ({review}) => {
  return (
    <article className='bg-gray-200 p-4 overflow-hidden rounded-md'>
      <h5 className='text-lg font-semibold text-gray-700'>{review.title}</h5>
      <p className='text-sm mt-2 w-50 text-justify'>
        {review.description}
      </p>
    </article>
  );
};
export default ReviewCard