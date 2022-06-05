import React, { useState } from "react";
import Footballer from "../images/Footballer.png";

const PlayerCard = ({
  player,
  spot,
  parent,
  DreamTeamComponent,
  relegatePlayerFromTeam,
  addPlayerToTeam,
  position2Fill,
  setPosition2Fill,
  setHighlightCard,
  highlightCard,
  dreamTeam,
  dreamNames,
}) => {
  const AddDreamTeamComponent = DreamTeamComponent;

  return (
    <div>
      {player.short_name ? (
        <div
          onClick={() => {
            console.log("TEST", position2Fill);
            if (parent === "PlayerGrid") {
              addPlayerToTeam(player, position2Fill);
            } else relegatePlayerFromTeam(spot);
          }}
          className={
            parent === "PlayerGrid"
              ? "relative justify-center rounded-xl border border-gray-800 text-center shadow-xl p-6 text-white border-solid border border-black transition duration-500 transform hover:scale-110"
              : "relative justify-center bg-opacity-50 border border-gray-800 text-center rounded-2xl text-white shadow-xl p-6 border-solid bg-black transition duration-500 transform hover:scale-110"
          }
        >
          <div className="">{player?.long_name}</div>
          <div className="flex justify-evenly mt-2">
            <img
              src={player?.nation_flag_url}
              className="w-8 "
              alt="flag"
            ></img>
            <div>{player?.nationality_name}</div>
            <div>{player?.nation_jersey_number}</div>
          </div>
          <img
            src={player?.player_face_url}
            alt="player-face"
            className="rounded-full mt-1  mx-auto w-16"
          ></img>

          <div className="flex justify-evenly items-center mt-1">
            <img src={player?.club_logo_url} alt="flag" className="w-12"></img>
            <div>{player?.club_name}</div>
            <div>{player?.club_jersey_number}</div>
          </div>
          <div className=" border border-green-400 rounded-full p-1 w-18 mx-auto">
            {" "}
            {player?.overall}
          </div>
          {/* <div className="text-sm mt-2">{player.player_traits}</div> */}

          <div className="bottom-bar text-sm">
            <div className="absolute bottom-0 left-0 pl-4">
              <span className="mr-1">Scout </span>
              <span role="img" aria-label="glass">
                🔍
              </span>
            </div>
            <div className="absolute bottom-0 right-0 pr-4">
              <AddDreamTeamComponent />
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            setPosition2Fill(spot);
            console.log("CLICKED POSITION: ", spot);
            if (highlightCard === spot) setHighlightCard(null);
            else setHighlightCard(spot);
            console.log(highlightCard);
          }}
          className={
            highlightCard === spot
              ? "relative justify-center text-center h-64 shadow-xl p-6 border-solid bg-gradient-to-r text-white from-black to-blue-900  transition duration-500 transform hover:scale-110"
              : "relative justify-center bg-opacity-75 text-center text-white bg-black shadow-xl p-6 transition duration-500 transform hover:scale-110"
          }
        >
          <div className="">UNKNOWN</div>

          <img
            src={Footballer}
            alt="player-face"
            className="rounded-full mt-2  mx-auto w-12"
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
      )}
    </div>
  );
};

export default PlayerCard;
