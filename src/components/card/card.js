import React from "react";
import "./card.css";

const Card = props => (
  <div className="container img-holder">
    <img
      alt="anything"
      src={props.image}
      id={props.id}
      onClick={() => props.shuffleIcons(props.id)}
      className="card-image"
    />
  </div>
);

export default Card;
