import './App.css';
import Header from "./Header";
import Books from "./Books";
//import Books from "./Books";
import React, {useEffect,useState} from "react";


//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";



function App() {

    const [books, setBooks] = useState({});





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



  return (

      <div className = "App" >
          <Header books={books} Library={Library}/>
          <Books books={books}/>




      </div>



  );
}

export default App;