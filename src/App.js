import React, {useState}  from "react";
import Header from "./Header.jsx";

import './App.css';
import BookList from "./BookList.jsx";
//import Pagination from "./Pagination.jsx";

function App() {
  const [booksList, setBooks] = useState({});
  const [booksStorage, setBooksStorage] = useState([]);

  async function fetchBooks(e) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e}&maxResults=30&key=AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I`)
    .then(function(res) {
      return res.json();
    })
    .then(function(result) {
      console.log(result);
      setBooks(result);
      setBooksStorage(booksStorage.concat(result.items));
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <Header booksList={booksList} fetchBooks={fetchBooks}/>
      <BookList booksList={booksList}/>

    </div>


  );
}

export default App;
