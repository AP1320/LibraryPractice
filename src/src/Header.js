import './App.css';
//import Header from "./Header";
import Books from "./Books";
import React, {useEffect,useState} from "react";
import App from "./App";

//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";

function Header(props) {

    const [inputValue, setInputValue] = useState('');

    const Search=()=>{
        props.Library(inputValue)

    }





    return (

        <div className = "Header" >


            <div className="inputSearchField">
                <h1 className="textSearch">Search for books</h1>
                <label className="textInputBook" htmlFor="site-search"></label>

                <input onKeyDown={(e) => {
                    if (e.key === "Enter") props.Library(inputValue)
                }} onChange={(e) => setInputValue(e.target.value)} type="search" id="books-search" name="q"/>
                <button onClick={Search}>Search</button>
            </div>
            <div className="selectorSort">
                <label className="textInputCategories" htmlFor="site-search">Categories</label>
                <select className="selectCategories">
                    <option selected value="All">All</option>
                    <option value="art">Art</option>
                    <option value="biography">Biography</option>
                    <option value="computers">Computers</option>
                    <option value="history">History</option>
                    <option value="medical">Medical</option>
                    <option value="poetry">Poetry</option>
                </select>
                <label className="textInputCategories" htmlFor="site-search">Sorting by</label>
                <select className="selectCategories">
                    <option selected value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                </select>
            </div>

        </div>



    );
}

export default Header;