import React from "react";
import "../containers/App.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc grow br3 pa3 ma2 dib shadow-5 robot-card">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
