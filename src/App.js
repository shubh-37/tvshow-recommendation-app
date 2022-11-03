import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const tvShows = [
    { name: "Friends", rating: "4/5", description: "", genre: "Sitcom" },
    {
      name: "Brooklyn 99",
      rating: "4.5/5",
      description: "",
      genre: "Sitcom",
    },
    {
      name: "Modern Family",
      rating: "3.5/5",
      description: "",
      genre: "Sitcom",
    },
    {
      name: "The Witcher",
      rating: "4.5/5",
      description: "",
      genre: "Action",
    },
    {
      name: "Bodyguard",
      rating: "5/5",
      description: "",
      genre: "Action",
    },
    {
      name: "Jack Ryan",
      rating: "5/5",
      description: "",
      genre: "Action",
    },
    {
      name: "Money Heist",
      rating: "4/5",
      description: "",
      genre: "Thriller",
    },
    {
      name: "Mirzapur",
      rating: "4.5/5",
      description: "",
      genre: "Thriller",
    },
    {
      name: "Stranger Things",
      rating: "4/5",
      description: "",
      genre: "Thriller",
    },
  ];

  let [filteredArr, setFilterArr] = useState([]);

  function clickHandler(event) {
    const name = event.target.getAttribute("name");
    filteredArr = tvShows.filter((obj) => obj.genre === name);
    setFilterArr(filteredArr);
  }
  return (
    <div className="App">
      <h1>Favorite TV Show</h1>
      <h3>
        Select a genre to know about my favorite TV Shows of each genre
        respectively.
      </h3>
      <div className="genre-btn">
        <button onClick={clickHandler} name="Sitcom">
          Sitcom
        </button>
        <button onClick={clickHandler} name="Action">
          Action
        </button>
        <button onClick={clickHandler} name="Thriller">
          Thriller
        </button>
      </div>
      <div>
        <div>
          {filteredArr.map((obj) => (
            <div className= "book-info">
              {obj.name}
              {obj.rating}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
