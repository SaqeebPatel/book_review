import React, { useState } from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  const handleClick = (index) => {
    onRatingChange(index + 1);
  };

  return (
    <div style={{ fontSize: '24px', color: '#f39c12' }}>
      {[1, 2, 3, 4, 5].map((star, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          style={{ cursor: 'pointer' }}
        >
          {rating > index ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
