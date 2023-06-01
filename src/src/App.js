import './App.css';
import Header from "./Header";
import Books from "./Books";
//import Books from "./Books";
import React, {useEffect,useState} from "react";
import Pagination from "./Pagination";
import Items from "./Pagination";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BooksDetails from "./BooksDetails";


//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";



function App() {

    const [books, setBooks] = useState([]);
    //const [currentPage, setCurrentPage] = useState(1);
    //const [postsPerPage, setPostsPerPage] = useState(8);





    async function Library(e) {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e}&maxResults=30&key=AIzaSyCjChLr-FuUcTDw6qfFDfwi3dXm6RInYxU`)
            .then(function(res) {
                return res.json();
            })
            .then(function(result) {
                console.log(result);
                setBooks(result);
            })
            .catch((err) => console.log(err))
    }
    //const lastPostIndex = currentPage * postsPerPage;
    //const firstPostIndex = lastPostIndex - postsPerPage;
    //const currentPosts = books.slice(firstPostIndex, lastPostIndex);


    return (

        <div className = "App" >

            <Header books={books} Library={Library}/>

            <Routes>
                <Route path="/" element={<Books books={books}/>}/>
            </Routes>


            <Routes>
               <Route path="/book/:id" element={<BooksDetails/>}/>
            </Routes>
        </div>



    );
}

export default App;