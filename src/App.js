import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const tvShows = [
    {
      name: "Friends",
      rating: "4/5",
      description:
        "Follow the lives of six reckless adults living in Manhattan",
      genre: "Sitcom",
    },
    {
      name: "Brooklyn 99",
      rating: "4.5/5",
      description:
        "Ray Holt, an eccentric commanding officer, and his diverse and quirky team of odd detectives solve crimes in Brooklyn, New York City.",
      genre: "Sitcom",
    },
    {
      name: "Modern Family",
      rating: "3.5/5",
      description:
        "Three modern-day families from California try to deal with their kids, quirky spouses and jobs in their own unique ways, often falling into hilarious situations.",
      genre: "Sitcom",
    },
    {
      name: "The Witcher",
      rating: "4.5/5",
      description:
        "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
      genre: "Action",
    },
    {
      name: "Bodyguard",
      rating: "5/5",
      description:
        "War veteran David Budd finds work as a police sergeant with the Metropolitan Police Service in London, in the Royalty and Specialist Protection branch.",
      genre: "Action",
    },
    {
      name: "Jack Ryan",
      rating: "5/5",
      description:
        "Former U.S. Marine is featured in an episodic series for the first time, with John Krasinski portraying Ryan in this Amazon original thriller that centers on Ryan as an up-and-coming CIA analyst.",
      genre: "Action",
    },
    {
      name: "Money Heist",
      rating: "4/5",
      description:
        "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.",
      genre: "Thriller",
    },
    {
      name: "Mirzapur",
      rating: "4.5/5",
      description:
        "Akhandanand Tripathi made millions exporting carpets and became the mafia boss of Mirzapur. His son Munna, an unworthy, power-hungry heir, stops at nothing to continue his father's legacy.",
      genre: "Thriller",
    },
    {
      name: "Stranger Things",
      rating: "4/5",
      description:
        "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
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
            <div className="tvshow-info">
              <div className="tvshow-name">{obj.name}</div>
              <div className="tvshow-rating">
                <b>Rating:</b> {obj.rating}
              </div>
              <div className="tvshow-description">
                <b>Descrption:</b> {obj.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
