import './App.css';
import Header from "./Header";
import Books from "./Books";
import React, {useState} from "react";

const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";

function App() {
    const [booksList, setBooks] = useState({});

    async function fetchBooks(e) {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e}&maxResults=30&key=AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I`)
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

        <
        div className = "App" >
        <Header/>
        <Books/>
        </div>



    );
}

export default App;