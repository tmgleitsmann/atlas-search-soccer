import React from "react";
import Footballer from "../images/Footballer.png";

const EmptyPlayerCard = ({ setPosition2Fill, spot }) => {
  return (
    <div
      onClick={() => {
        setPosition2Fill(spot);
        console.log("CLICKED POSITION: ", spot);
      }}
      className="group relative justify-center text-center shadow-xl p-6 border-solid border border-indigo-100 transition duration-500 transform hover:scale-110"
    >
      <div className="">UNKNOWN</div>

      <img
        src={Footballer}
        alt="player-face"
        className="rounded-full mt-2  mx-auto w-24"
      ></img>

      {/* <div className="text-sm mt-2">{player.player_traits}</div> */}

      <div className="bottom-bar mt-4">
        <div className="absolute bottom-0 text-center my-2 pl-4">
          <span className="mr-1">Click to fill position </span>
          <span role="img" aria-label="glass">
            🔍
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmptyPlayerCard;
