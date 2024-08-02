
// import React from 'react';
// import { useFetch } from './Custom Hook ';

// const AllBooks = () => {
//   const { data: books, loading, error } = useFetch(`https://freetestapi.com/api/v1/books`);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   // Slice the first 5 books
//   const firstFiveBooks = books.slice(0, 10);

//   return (
//     <div>
//       {firstFiveBooks.map((book) => (
//         <div className="card mb-3" key={book.id}>
//            <img src="https://media.istockphoto.com/id/1263424631/photo/e-learning-online-education-or-internet-encyclopedia-concept-open-laptop-and-book-compilation.jpg?s=2048x2048&w=is&k=20&c=1iPt0T5ZHrQ5eEWRyigddIPA-FDBxc6UkrsY3LTz3Lk=" className="card-img-top" alt="..." style={{ maxWidth: "540px",  maxHeight:"500px"}}></img>
//           <div className="card-body">
//             <h5 className="card-title">Book title: {book.title}</h5>
//             <p className="card-text">Description: {book.description}</p>
//             <p className="card-text">
//               <small className="text-muted">Publication year: {book.publication_year}</small>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AllBooks;
import React from 'react';
import { useFetch } from './Custom Hook ';

const AllBooks = () => {
  const { data: books, loading, error } = useFetch(`https://freetestapi.com/api/v1/books`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Slice the first 5 books
  const firstFiveBooks = books.slice(0, 20);

  return (
    <div className="container">
      <div className="row">
        {firstFiveBooks.map((book) => (
          <div className="col-md-4 mb-3" key={book.id}>
            <div className="card">
            <img src="https://media.istockphoto.com/id/1263424631/photo/e-learning-online-education-or-internet-encyclopedia-concept-open-laptop-and-book-compilation.jpg?s=2048x2048&w=is&k=20&c=1iPt0T5ZHrQ5eEWRyigddIPA-FDBxc6UkrsY3LTz3Lk=" className="card-img-top" alt="..." style={{ maxWidth: "540px",  maxHeight:"500px"}}></img>
              <div className="card-body">
                <h5 className="card-title">Book title: {book.title}</h5>
                <p className="card-text">Description: {book.description}</p>
                <p className="card-text">
                  <small className="text-muted">Publication year: {book.publication_year}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
