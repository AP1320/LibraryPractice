import './App.css';
import Header from "./Header";
import Books from "./Books";
//import Books from "./Books";
import React, {useEffect,useState} from "react";
import Pagination from "./Pagination";
import Items from "./Pagination";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BooksDetails from "./BooksDetails";
import About from "./About";
import {books} from "./Books";

import {useNavigate} from 'react-router-dom';
import Boooks from "./Boooks";
import ReactPaginate from "react-paginate";
import NoPageFound from "./NoPageFound";

//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";
import PropTypes from 'prop-types';


function App(props) {

    const [books, setBooks] = useState({});
    const [book, setBook] = useState({});
    const navigate=useNavigate();



    async function Library(e) {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e}&maxResults=40&key=AIzaSyCjChLr-FuUcTDw6qfFDfwi3dXm6RInYxU`)
            .then(function(res) {
                return res.json();
            })
            .then(function(result) {
                console.log(result);
                setBooks(result);
            })
            .catch((err) => console.log(err))
    }









    return (

        <div className = "App" >



            <Header books={books} Library={Library}/>



            <Routes>
                <Route path="/" element={<Books books={books}/>}/>
                <Route path="/book/:id" element={<BooksDetails book={book}/>}/>
                <Route path="*" element={<NoPageFound/>}/>

            </Routes>




        </div>



    );
}

export default App;