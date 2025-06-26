import React , {useState}from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";


const App = () => {

  const initialBookState = [
    {
      id: 1,
      title: "React For Dummies",
      author:"Chat GPT",
      image: "defeated human",
      publishedDate: 2025,
      description: "description",
      rating: 5,
      category: "drama",
      isRead: false,
      isFavorite: false,

    }
  ]
  
  const [books, setBooks] = useState(initialBookState)

  const appendBook = (book) => {
    const newBook = {
      ...book,
      id: books.length + 1
    }
    setBooks([...books, newBook])
  }

  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook appendBook = {appendBook}/>
      <BookList books = {books}/>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
