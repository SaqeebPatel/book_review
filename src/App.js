import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import BookDetails from './Components/BookDetails';
import AddReview from './Components/AddReview';
import AllBooks from './Components/AllBooks';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/AllBooks" element={<AllBooks />} />
        <Route path="/book/:id/AddReview" element={<AddReview />} />
      </Routes>
    </Router>
  );
}

export default App;
