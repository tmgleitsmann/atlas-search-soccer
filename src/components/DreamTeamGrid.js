import React from "react";
import PlayerCard from "./PlayerCard";

const DreamTeamGrid = ({
  players,
  DreamTeamComponent,
  relegatePlayerFromTeam,
  position2Fill,
  setPosition2Fill,
  setHighlightCard,
  highlightCard,
}) => {
  return (
    <>
      <div className="grid grid-cols-7 gap-x-2 gap-y-8 px-20  pt-8 pb-20 mx-24 ">
        <div className="col-start-1 rounded-lg min-5-[32px] ">
          <PlayerCard
            player={players[8].player}
            spot={8}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-4 rounded-lg min-5-[32px] ">
          <PlayerCard
            player={players[9].player}
            spot={9}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-7 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[10].player}
            spot={10}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-2 rounded-lg min-5-[32px] ">
          <PlayerCard
            player={players[5].player}
            spot={5}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-4 rounded-lg min-5-[32px] ">
          <PlayerCard
            player={players[6].player}
            spot={6}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-6 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[7].player}
            spot={7}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-1 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[1].player}
            spot={1}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-3 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[2].player}
            spot={2}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-5 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[3].player}
            spot={3}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-7 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[4].player}
            spot={4}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>

        <div className="col-start-4 rounded-lg min-5-[32px] mb-20">
          <PlayerCard
            player={players[0].player}
            spot={players[0].spot}
            DreamTeamComponent={DreamTeamComponent}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
      </div>
    </>
  );
};

export default DreamTeamGrid;
