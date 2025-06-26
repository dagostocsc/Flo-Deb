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

const AddBook = ({appendBook}) => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isRead, setIsRead] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [dirty, setDirty] = useState(false)
// console.log("isRead--->", isRead)

const clearForm = () => {
  setTitle("");
  setTitle("");
  setAuthor("");
  setImage("");
  setPublishedDate("");
  setDescription("");
  setRating("");
  setSelectedCategory("");
  setIsRead(false);
  setIsFav(false);
  setDirty(false);
};


const handleSubmit = (event) => {
  // event.target.value
  event.preventDefault();

 const newBook = {
      title,
      author,
      image,
      publishedDate,
      description,
      rating,
      category: selectedCategory,
      isRead,
      isFavorite: isFav,
    };
  appendBook(newBook)
  clearForm();
}
  


  const handleTitleChange = (event) => {
    setDirty(true)
    setTitle(event.target.value)
  
  }
  const handleAuthorChange = (event) => {
    setDirty(true)
    setAuthor(event.target.value)
  }

  const handlePublishedDateChange = (event) => {
    setPublishedDate(event.target.value)
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleIsReadChange = (event) => {
    setDirty(true)
    setIsRead(event.target.checked)
  }

  const handleIsFavChange = (event) => {
    setDirty(true)
    setIsFav(event.target.checked)
  }

  return (
    <main className="form-container">
      <form onSubmit={handleSubmit} className="book-form">
        <input
          name="title"
          className="addBook-title"
          type="text"
          required
          value={title}
          placeholder="Title"
          onChange={handleTitleChange}
        />
        <input
          name="author"
          className="addBook-author"
          type="text"
          required
          value={author}
          placeholder="Author"
          onChange={handleAuthorChange}
        />
        <input
          name="image"
          className="addBook-image"
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          name="published-date"
          className="addBook-date"
          type="number"
          value={publishedDate}
          placeholder="Published Date"
          onChange={handlePublishedDateChange}
        />
        <textarea
          name="description"
          className="addBook-description"
          type="text"
          value={description}
          placeholder="Description"
          rows={6}
          cols={10}
          onChange={handleDescriptionChange}
        />
        <input
          name="rating"
          className="addBook-rating"
          type="text"
          value={rating}
          placeholder="Rating"
          onChange={(e) => setRating(e.target.value)}
        />
        <label>
          Select Category:
          <select
            name="category"
            className="addBook-category"
            onChange={handleCategoryChange}
            value={selectedCategory}
          // onChange={handleTitleChange}
        >
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="poetry">Poetry</option>
          <option value="drama">Drama</option>
          <option value="biography">Biography</option>
          <option value="history">History</option>
          <option value="science">Science</option>
          <option value="technology">Technology</option>
          <option value='art'>Art</option>
          <option value="cooking">Cooking</option>
          </select>
          </label>
          <label>

         <input
            name="is-read"
            className="addBook-read"
            type="checkbox"
            checked={isRead}
            onChange={handleIsReadChange}
         />
         Read
         </label>

         <label>
         <input
          name="is-fav"
          className="addBook-fav"
          type="checkbox"
          checked={isFav}
          onChange={handleIsFavChange}
         />
         Favorite
         </label>
         <button>AddBook</button>
      </form>
    </main>
    
  ) 
  
};

export default AddBook;
