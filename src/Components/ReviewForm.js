// import React, { useRef, useState } from 'react';

// function ReviewForm({ bookId }) {
//   const textRef = useRef();
//   const ratingRef = useRef();
//   const [status, setStatus] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const review = {
//       text: textRef.current.value,
//       rating: ratingRef.current.value,
//       bookId,
//     };
    
//     setStatus('Review submitted successfully!');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="text" className="form-label">Review Text</label>
//         <textarea className="form-control" id="text" rows="3" ref={textRef} required></textarea>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="rating" className="form-label">Rating</label>
//         <input type="number" className="form-control" id="rating" ref={ratingRef} required />
//       </div>
//       <button type="submit" className="btn btn-primary">Submit</button>
//       {status && <p>{status}</p>}
//     </form>
//   );
// }

// export default ReviewForm;
import React, { useRef, useState } from 'react';

function ReviewForm({ bookId }) {
  const textRef = useRef();
  const ratingRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = {
      text: textRef.current.value,
      rating: ratingRef.current.value,
      bookId,
    };
    
    setStatus('Review submitted successfully!');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <h2>Reviews</h2>
          <label htmlFor="text" className="form-label">Review Text</label>
          <textarea className="form-control" id="text" rows="3" ref={textRef} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input type="number" className="form-control" id="rating" ref={ratingRef} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}

export default ReviewForm;
