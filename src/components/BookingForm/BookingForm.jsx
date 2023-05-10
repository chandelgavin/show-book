import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = ({ movieName }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showName, setShow] = useState({});

  const handleSubmit = (e) => {
    e.Default();
    // handle form submission
  };

  useEffect(() => { 
    localStorage.setItem("Username",JSON.stringify(name))
    localStorage.setItem("PhoneNumber",JSON.stringify(number))
    localStorage.setItem("UserEmail",JSON.stringify(email))
    });

  

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
  }, [showName]);

  


  return (
    <div className="booking-form-container">
      <h2>BOOK TICKETS</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Movie/Show:
          <input type="text"
            value={showName.name}
            />
        </label>
        <label>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Email ID:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button className="book-btn" type="submit">Book Now</button>
      </form>

      

    </div>
  );
};

export default BookingForm;