
// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useFetch } from './Custom Hook '; // Ensure the import path is correct
// import './Card.css';

// function BookDetails() {
//   const { id } = useParams();
//   const { data: book, loading, error } = useFetch(`https://freetestapi.com/api/v1/books/${id}`);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // Load reviews from localStorage when component mounts
//     const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
//     setReviews(storedReviews.filter(review => review.bookId === id));
//   }, [id]);

//   const handleDelete = (index) => {
//     // Load reviews from localStorage
//     const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
//     // Filter out the review to be deleted
//     const updatedReviews = storedReviews.filter((_, i) => i !== index);
//     // Update localStorage and state
//     localStorage.setItem('reviews', JSON.stringify(updatedReviews));
//     setReviews(updatedReviews);
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className="container">
//       {/* <ul className="list-group mt-5">
//         <li className="list-group-item list-group-item-info">Title: {book.title}</li>
//         <li className="list-group-item list-group-item-info">Author: {book.author}</li>
//         <li className="list-group-item list-group-item-info">Description: {book.description}</li>
//         <li className="list-group-item list-group-item-info">Publication Year: {book.publication_year}</li>
//       </ul> */}
//       <div class="card bg-dark text-white">
//   <img src="https://plus.unsplash.com/premium_photo-1681701892410-c22d446a0567?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img" alt="..."style={{maxHeight:"500px"}}></img>
//   <div class="card-img-overlay">
//     <h5 class="card-title" style={{color:"black"}}>Title: {book.title}</h5>
//     <h5 class="card-text"style={{color:"black"}}>Author: {book.author}</h5>
//     <h5 class="card-text"style={{color:"black"}}>Description: {book.description}</h5>
//     <h5 class="card-text"style={{color:"black"}}>Publication Year: {book.publication_year}</h5>
//   </div>
// </div>
//       <br />
//       <Link to={`/book/${id}/AddReview`} className="btn btn-outline-success">Add Review</Link>
//       <div className="reviews-container mt-3">
//         {reviews.length > 0 ? (
//           <div className="reviews-grid">
//             {reviews.map((review, index) => (
//               <div key={index} className="review-card">
//                 <p>{book.title || 'No Title'}</p>
//                 <h4>{review.text}</h4>
//                 <p>Rating: {review.rating}</p>
//                 <button onClick={() => handleDelete(index)} className="btn btn-outline-danger">Delete</button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No reviews yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from './Custom Hook '; // Ensure the import path is correct
import ReactStars from 'react-rating-stars-component';
import './Card.css';

function BookDetails() {
  const { id } = useParams();
  const { data: book, loading, error } = useFetch(`https://freetestapi.com/api/v1/books/${id}`);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Load reviews from localStorage when component mounts
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(storedReviews.filter(review => review.bookId === id));
  }, [id]);

  const handleDelete = (index) => {
    // Load reviews from localStorage
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    // Filter out the review to be deleted
    const updatedReviews = storedReviews.filter((_, i) => i !== index);
    // Update localStorage and state
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setReviews(updatedReviews);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mt-5 " >
      <div className="card bg-dark text-white">
        <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img" style={{ maxHeight: "150px" }}></img>
        <div className="card-img-overlay">
          <h5 className="card-title" style={{ color: "black" }}>Title: {book.title}</h5>
          <h5 className="card-text" style={{ color: "black" }}>Author: {book.author}</h5>
          <h5 className="card-text" style={{ color: "black" }}>Description: {book.description}</h5>
          <h5 className="card-text" style={{ color: "black" }}>Publication Year: {book.publication_year}</h5>
        </div>
      </div>
      <br />
      <Link to={`/book/${id}/AddReview`} className="btn btn-outline-success">Add Review</Link>
      <div className="reviews-container mt-3">
        {reviews.length > 0 ? (
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <h4>{review.text}</h4>
                <p>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </p>
                <button onClick={() => handleDelete(index)} className="btn btn-outline-danger">Delete</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default BookDetails;
