import './App.css';
import Header from "./Header";
//import Books from "./Books";
import React, {useEffect,useState} from "react";
import { Pagination } from "react-pagination-bar"
import {Link} from 'react-router-dom';
import BooksDetails from "./BooksDetails";
import {useNavigate} from 'react-router-dom';
//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";

function Books(props) {

    const [books, setBooks] = useState([]);
    const navigate=useNavigate();
    const res = props.books.items?.map(book => {
        return (
            <div className="Books" key={book.id}>
                <div>
                    <h2>{book.volumeInfo.title}</h2>
                    <img src={book.volumeInfo.imageLinks?.smallThumbnail} alt={book.id} onClick={()=>navigate(`/book/${book.id}`)}/>
                </div>

                <div>
                    <h2>Author</h2>
                    <p>{book.volumeInfo.authors}</p>
                    <h2>Description</h2>
                    <p>{book.volumeInfo.description}</p>
                    <h2>Publisher</h2>
                    <p>{book.volumeInfo.publisher}</p>
                    <h2>Published Date</h2>
                    <p>{book.volumeInfo.publishedDate}</p>
                    <h2>Book's price</h2>
                    <p>{book.saleInfo.retailPrice?.amount}</p>


                </div>


            </div>
        )
    })


    return (
        <div className="result">
            {res}

        </div>
    )
}
export default Books;