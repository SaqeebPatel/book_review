import React from 'react';
import { useFetch } from './Custom Hook ';
import BookCard from './BookCard';

function HomePage() {
  const { data: books, loading, error } = useFetch('https://freetestapi.com/api/v1/books?limit=5 ');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <div className="row">
        {books && books.length > 0 ? (
          books.map(book => (
            <div className="col-md-4" key={book.id}>
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
