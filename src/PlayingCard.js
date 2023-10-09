import React from "react";
import useFlip from "./hooks/useFlip";
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipsCard] = useFlip();
  
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipsCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
