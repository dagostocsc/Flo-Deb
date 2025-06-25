import React , {useState} from "react";
import "./AddBook.css"

/**
 * A book should have the following fields:
 * - title (required)
 * - author (required)
 * - image (optional, url)
 * - publishedDate (optional, datetime)
 * - description (optional, text)
 * - rating (number, 1-5)
 * - category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * - isRead (boolean, default false)
 * - isFavorite (boolean, default false)
 */

const AddBook = () => {

  const [title, setTitle] = useState("");
  const [dirty, setDirty] = useState(false)
console.log("Dirty State-->",dirty)
console.log("title state-->", title)

const clearForm = () => {
  setTitle("");
}


const handleSubmit = (event) => {
  // event.target.value
  event.preventDefault();
  // appendBook()
  // clearForm();
}


  const handleTitleChange = (event) => {
    setDirty(true)
    setTitle(event.target.value)
  
    console.log("Title state-->", title)
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="book-form">
        <input
          name="title"
          className="addBook-input"
          type="text"
          required
          value={title}
          placeholder="Enter Title"
          onChange={handleTitleChange}
        />
          <button>AddBook</button>
      </form>
    </main>
    
  ) 
  
};

export default AddBook;
