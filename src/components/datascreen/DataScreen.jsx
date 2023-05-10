import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



import "./DataScreen.css";

const DataScreen = () => {
  const [shows, setShows] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleShowClick = (showId) => {
    localStorage.setItem("selectedShowId", showId);
    navigate("/summary");
  };

  return (
    <div className="container">
      <div className="row">
        {shows.map((show) => (
          <div key={show.show.id} className="class-1">
            <div className="card">
              <div>
                {show.show.image && (
                  <img
                    src={show.show.image.medium}
                    alt={show.show.name}
                    className="card-img-top"
                  />
                )}
              </div>

              <div className="card-body">
                <h2 className="card-title">{show.show.name}</h2>
                <p className="card-text">Type: {show.show.type}<br></br> Language: {show.show.language}<br></br>
                   Genre:  {show.show.genres[0]} {show.show.genres[1]} {show.show.genres[2]}</p>
                <button
                  className="card-btn btn btn-primary"
                  onClick={() => handleShowClick(show.show.id)}
                >
                  <Link class="btn-text" to={"/summary"}>Summary</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataScreen;
