import React from "react";
import "./styles.css";

export default function App() {
  const tvshowDict = {
    Sitcom: {
      Friends: {
        Rating: "4/5",
        Description: "",
      },
      B99: {
        Rating: "4.5/5",
        Description: "",
      },
      "Modern Family": {
        Rating: "3.5/5",
        Description: "",
      },
    },
    Action: {
      "The Witcher": {
        Rating: "4.5/5",
        Description: "",
      },
      Bodyguard: {
        Rating: "5/5",
        Description: "",
      },
      "Jack Ryan": {
        Rating: "5/5",
        Description: "",
      },
    },
    Thriller: {
      "Money Heist": {
        Rating: "4/5",
        Description: "",
      },
      Mirzapur: {
        Rating: "4.5/5",
        Description: "",
      },
      "Stranger Things": {
        Rating: "4/5",
        Description: "",
      },
    },
  };
  const tvshowArr = Object.keys(tvshowDict);
  function clickHandler() {
    console.log("clicked");
  }
  return (
    <div className="App">
      <h1>Favorite TV Show</h1>
      <h3>
        Select a genre to know about my favorite TV Shows of each genre
        respectively.
      </h3>
      <div className="genre-btn">
        <button onClick={clickHandler} name="sitcom">
          Sitcom
        </button>
        <button>Action</button>
        <button>Thriller</button>
      </div>
      <div>
        <div>{}</div>
      </div>
    </div>
  );
}
