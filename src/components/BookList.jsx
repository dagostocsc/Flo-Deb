import React from "react";
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
  console.log("books--->", books)
  return (
    <main>
      <p>this is book list</p>
      {books.map((book) => (
         <ul className="books" 
         key={book.id}>
            <li>Title: {book.title}</li>
            <li>Author: {book.author}</li>
            <li>{book.image}</li>
            <li>published date: {book.publishedDate}</li>
            <li>Description: {book.description}</li>
            <li>Rating: {book.rating}</li>
            <li>Category: {book.category}</li>
      </ul>
      ))}
     
    </main>
  )
};

export default BookList;
