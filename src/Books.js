import './App.css';
import Header from "./Header";
//import Books from "./Books";
import React, {useEffect,useState} from "react";
import { Pagination } from "react-pagination-bar"
import {Link} from 'react-router-dom';
import BooksDetails from "./BooksDetails";
import {useNavigate} from 'react-router-dom';
//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";
import PropTypes from 'prop-types';

function Books(props) {
    const [selectedBook, setSelectedBook] = useState(null);

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const navigate=useNavigate();
    const res = props.books.items?.map(book => {
        return (
            <div  className="Books" key={book.id}>
                <div>
                    <p>{book.volumeInfo.title}</p>
                    <img src={book.volumeInfo.imageLinks?.smallThumbnail} alt="#" onClick={()=>navigate(`/book/${book.id}`)}/>

                </div>




            </div>
        )
    })



    return (
        <div className="result1">
            {res}


        </div>
    )
}
export default Books;

Books.propTypes = {
    booksStorage: PropTypes.object,
    setSelectedBook: PropTypes.func
}