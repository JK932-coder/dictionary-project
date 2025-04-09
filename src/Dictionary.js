import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import logo from "./logo.png";

export default function Dictionary() {
    let [keyword,setKeyword]= useState(""); 
    let [results,setResults]=useState(null);
    
    function handleResponse(response){
console.log(response.data[0]);
setResults(response.data[0]);
    }
    function handleKeywordChange(event){
    setKeyword(event.target.value);
    }
    function search (event) {
        event.preventDefault();

   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`; 
axios.get(apiUrl).then(handleResponse);

}
   
    return (
      <div className="Dictionary">
        <img src={logo} alt="Logo" className="dictionary-image" />
        <h4>Enter the word</h4>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <Results results={results} />
      </div>
    );

}