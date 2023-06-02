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

//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";



function NoPageFound() {



    return (

        <div className = "NoPageFound" >


            <h1>No Page Found</h1>

        </div>

    );
}

export default NoPageFound;