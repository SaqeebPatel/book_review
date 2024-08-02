
import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

function AddReview() {
  const textRef = useRef(null);
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      bookId: id,
      text: textRef.current ? textRef.current.value : '',
      rating
    };

    // Validate rating to be between 0 and 5
    if (!review.text || rating < 0 || rating > 5) {
      setStatus('Please fill in all fields with a valid rating between 0 and 5.');
      return;
    }

    // Save review to localStorage
    const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    existingReviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(existingReviews));

    setStatus('Review submitted successfully!');

    // Redirect after a short delay
    setTimeout(() => navigate(`/book/${id}`), 1000);
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="container mt-5">
      <h1>Add Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Review Text</label>
          <textarea className="form-control" id="text" rows="3" ref={textRef} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating (0 to 5)</label>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <button type="submit" className="btn btn-outline-success">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default AddReview;
