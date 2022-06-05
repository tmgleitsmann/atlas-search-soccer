import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerGrid = ({
  header,
  players,
  DreamTeamComponent,
  addPlayerToTeam,
  position2Fill,
  setPosition2Fill,
  dreamTeam,
  dreamNames,
}) => {
  return (
    <>
      <div className="text-lg mr-20">{header}</div>
      <div className="grid grid-cols-6 gap-4 p-2 mt-10">
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
    </>
  );
};

export default PlayerGrid;
