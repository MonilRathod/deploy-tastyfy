import React, { useState } from 'react';
import "./Search-Box.css";
import { IoIosSearch } from "react-icons/io";

function SearchBox({ recipes, setRec }) {

  const [name, setName] = useState("");

  function InputChangehandler(event) {
    const str = event.target.value;
    setName(str);
    if (str === "") {
      setRec(recipes);
    } else {
      let ext = [];
      for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].title.toUpperCase().includes(str.toUpperCase())) {
          ext.push(recipes[i]);
        }
      }
      setRec(ext);
    }
  }

  return (
    <>
      <div className="search-bar" >
        <IoIosSearch size={25} className="icon" />
        <input type="text" className="s-input" placeholder="Search Recipes" value={name} onChange={InputChangehandler} />
      </div>
    </>
  )
}

export default SearchBox;
