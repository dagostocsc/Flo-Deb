import React , {useState}from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";


const App = () => {

  const initialBookState = [
    {
      id: 1,
      title: "title",
      author:"author",
      image: "image",
      publishedDate: 1986,
      description: "description",
      rating: 5,
      category: "drama",
      isRead: false,
      isFavorite: false,

    }
  ]
  
  const [books, setBooks] = useState(initialBookState)

  const appendBook = (newBook) => {
    const book = {
      id: newBook.length + 1,
      title: newBook.title,
      author:"author",
      image: "image",
      publishedDate: 1986,
      description: "description",
      rating: 5,
      category: "drama",
      isRead: false,
      isFavorite: false,
    }
    
    
  }

  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook />
      <BookList books = {books}/>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
