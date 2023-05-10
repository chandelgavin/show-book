import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SummaryScreen.css";
import { useNavigate } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";

const SummaryScreen = ({ showId }) => {
  const [show, setShow] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const selectedShowId = localStorage.getItem("selectedShowId");
    axios
      .get(`https://api.tvmaze.com/shows/${selectedShowId}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [showId]);



  const handleShowClick = (showId, movieName) => {
    localStorage.setItem("selectedShowId", showId);
    navigate("/booking");
  };

  return (
    <div className="summary-screen-container">
      <h2 className="summary-heading">{show.name}</h2>
      <div className="summary-screen-content">
        {show.image?.medium && (
          <img
            src={show.image.medium}
            alt={show.name}
            className="summary-screen-image"
          />
        )}
        <p
          className="para"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        ></p>
        <button
          onClick={() => handleShowClick(show.id, show.name)}
          className="summary-screen-button"
        >
          {/* <Link class="btn-text" to={"/booking"}>Book Tickets</Link> */}
          Book Tickets
        </button>
      </div>
    </div>
  );
};

export default SummaryScreen;
