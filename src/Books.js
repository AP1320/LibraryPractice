import './App.css';
import Header from "./Header";
//import Books from "./Books";
import React, {useEffect,useState} from "react";

//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";

function Books(props) {





    const res = props.books.items?.map(el => {
        return (
            <div className="Books" key={el.id}>
                <p>{el.volumeInfo.title}</p>
                <img src={el.volumeInfo.imageLinks?.smallThumbnail} alt={el.id} />
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