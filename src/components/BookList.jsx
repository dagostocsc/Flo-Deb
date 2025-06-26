import React from "react";
import BookCard from "./BookCard";
import "./BookList.css"

  // const initialBookState = [
  //   {
  //     id: 1,
  //     title: "title",
  //     author:"author",
  //     image: "image",
  //     publishedDate: 1986,
  //     description: "description",
  //     rating: 5,
  //     category: "drama",
  //     isRead: false,
  //     isFavorite: false,

  //   }
  // ]

const BookList = ({books}) => {
  return (
    <main className="booklist-container">
      <h2>My Library</h2>
      <section className="books-container">
      {books.length === 0 ? (
        <p>No books yet</p>
      ) : (
        books.map((book) => <BookCard key={book.id} book={book}/>)
      )}
      </section>
    </main>
  )
};

export default BookList; 
