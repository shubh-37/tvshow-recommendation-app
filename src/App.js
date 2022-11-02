import React from "react";
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
      Rating: "4/5",
      Description: "",
      genre: "Thriller",
    },
  ];
  let filteredArr = [];
  function clickHandler(event) {
    console.log("clicked");
    const name = event.target.getAttribute("name");
    console.log({ name });
    filteredArr = tvShows.filter((obj) => obj.genre === name);
    console.log({ filteredArr });
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
            <span>{obj.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
