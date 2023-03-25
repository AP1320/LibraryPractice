import './App.css';
import Header from "./Header";
import React from "react";

function Books() {
    const apiGet=()=>
    {
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }







    return (


        <div className="Books">
            MY API<br/>
            <button onClick={apiGet}><Books/></button>

        </div>





    );
}

export default Books;