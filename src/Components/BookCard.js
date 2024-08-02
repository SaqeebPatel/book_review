import React from 'react';
import { Link } from 'react-router-dom';
import "./BookDetails";

function BookCard({ book , review}) {
  return (
   


<div className="card gap-3 d-grid mt-5 " style={{ maxWidth: "540px",  maxHeight:"500px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://media.istockphoto.com/id/1043539364/photo/color-books-stack-isolated.jpg?s=2048x2048&w=is&k=20&c=htFWRgBxHdWtSh0sFfoUHxT4nA_UVatkf4DTVrpl91A=" className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Title : {book.title}</h5>
        <p className="card-text">Author: {book.author}</p>
        </div>
      
    </div>
  </div>
  <Link to={`/book/${book.id}`} className="btn btn-outline-info">View Details</Link>
</div>
  );
}

export default BookCard;
