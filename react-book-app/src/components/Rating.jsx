import React from "react";
import "./rating.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const starValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              className="starInput"
              onClick={() => setRating(starValue)}
            />
            <FaStar
            // className="starHover"
              color={starValue<=(hover||rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(starValue)}
              onMouseOut={() => setHover(null)}
            />
          </label>
        );
      })}
      <p size={5}>rating is {rating}</p>
    </div>
  );
};

export default Rating;
