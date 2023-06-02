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



function About() {

    return (

        <div className = "About" >
            <h1>React JS Library</h1>

        </div>



    );
}



export default About;