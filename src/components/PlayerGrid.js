import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerGrid = ({
  header,
  players,
  DreamTeamComponent,
  handleDreamTeamClick,
}) => {
  return (
    <>
      <div className="text-lg mr-20">{header}</div>
      <div className="grid grid-cols-6 gap-4 p-2 mt-10">
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            player={player}
            DreamTeamComponent={DreamTeamComponent}
            handleDreamTeamClick={handleDreamTeamClick}
          />
        ))}
      </div>
    </>
  );
};

export default PlayerGrid;
