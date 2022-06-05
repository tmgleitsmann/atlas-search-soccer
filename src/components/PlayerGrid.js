import React from "react";
import PlayerCard from "./PlayerCard";
import Tackle from "../images/slide.png";

const PlayerGrid = ({
  players,
  DreamTeamComponent,
  addPlayerToTeam,
  position2Fill,
  setPosition2Fill,
  dreamTeam,
  dreamNames,
  setShowPlayerChoices,
  showPlayerChoices,
}) => {
  return (
    <div className="flex relative px-10 mb-6 transition-all duration-1000 ease-in-out">
      <img
        src={Tackle}
        alt="tackle"
        className="absolute rounded-lg w-40 object-contain -left-4 -top-12 z-10"
        onClick={() => setShowPlayerChoices(!showPlayerChoices)}
      ></img>
      {showPlayerChoices ? (
        <div className="grid grid-cols-6 gap-4 p-2 mt-10 ml-48 w-4/5">
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              player={player}
              parent="PlayerGrid"
              DreamTeamComponent={DreamTeamComponent}
              addPlayerToTeam={addPlayerToTeam}
              position2Fill={position2Fill}
              setPosition2Fill={setPosition2Fill}
              dreamTeam={dreamTeam}
              dreamNames={dreamNames}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-2 p-2 mt-6 ml-48 w-4/5"></div>
      )}
    </div>
  );
};

export default PlayerGrid;
