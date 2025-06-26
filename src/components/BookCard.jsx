import React from "react";
import './BookCard.css'

const BookCard = ({book}) => {
  return (
    <main>
         <ul className="books" >
            <li>Title: {book.title}</li>
            <li>Author: {book.author}</li>
            <li>{book.image}</li>
            <li>published date: {book.publishedDate}</li>
            <li>Description: {book.description}</li>
            <li>Rating: {book.rating}</li>
            <li>Category: {book.category}</li>
            <li>Read: {book.isRead ? "Yes" : "No"}</li>
            <li>Favorite: {book.isFav ? "Yes" : "No"}</li>
      </ul>
    </main>
  )
};

export default BookCard;
