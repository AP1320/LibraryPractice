import './App.css';
//import Header from "./Header";
import Books from "./Books";
import React, {useEffect,useState} from "react";

//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";

function Header(props) {

    const [inputValue, setInputValue] = useState('');




    return (

        <div className = "Header" >


            <div className="inputSearchField">
                <h1 className="textSearch">Search for books</h1>
                <label className="textInputBook" htmlFor="site-search"></label>
                <input onKeyDown={(e) => {
                    if (e.key === "Enter") props.Library(inputValue)
                }} onChange={(e) => setInputValue(e.target.value)} type="search" id="books-search" name="q"/>
            </div>
            <div className="selectorSort">
                <label className="textInputCategories" htmlFor="site-search">Categories</label>
                <select className="selectCategories">
                    <option selected value="All">All</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </select>
                <label className="textInputCategories" htmlFor="site-search">Sorting by</label>
                <select className="selectCategories">
                    <option selected value="relevance">relevance</option>
                    <option value="newest">newest</option>
                </select>
            </div>
            <div className="totalItem">
                <p>Find {props.Library.totalItems} results</p>
            </div>
        </div>



    );
}

export default Header;