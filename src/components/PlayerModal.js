import React from "react";

const PlayerModal = ({
  players,
  playerIndex,
  setShowPlayerModal,
  setPlayerIndex,
  addPlayerToTeam,
  position2Fill,
}) => {
  return (
    <div className="fixed inset-0 z-20 p-20 flex justify-center bg-slate-700 ">
      <div className="relative flex flex-col w-2/3 bg-white  border border-black rounded h-2/3 mt-60 ">
        <div className="p-4 mb-4 text-4xl font-bold text-center text-tolopea-500 "></div>
        <div className="flex justify-around py-4 pl-2 pr-4">
          {/* <img
            src={player.player_face_url}
            alt="player"
            className="object-contain w-1/2 my-auto rounded-full"
          /> */}
          <div className="flex flex-col ml-6 text-2xl ">Working here</div>

          <div> Name: {players[0].long_name}</div>
          <div> Club Jersey Number: {players[0].club_jersey_number}</div>
          <div> Club: {players[0].club_name}</div>
          <div> National Jersey Number: {players[0].nation_jersey_number}</div>
          <div> Nationality: {players[0].nationality_name}</div>
          <div> Overall{players[0].overall}</div>
          <div> Pace: {players[0].pace}</div>
          <div> Dribbling: {players[0].dribbling}</div>
          <div> Shooting: {players[0].shooting}</div>
          <div> Defending: {players[0].defending}</div>
          <div> Physical: {players[0].physic}</div>
          <div> Skill Moves: {players[0].skill_moves}</div>
          <div> Weak Foot:{players[0].weak_foot}</div>
        </div>
        <div
          className="absolute bottom-0 left-0"
          onClick={() => {
            setShowPlayerModal(false);
            setPlayerIndex(-100);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            viewBox="0 0 20 20"
            fill="#ff0000"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-0 right-0"
          onClick={() => {
            console.log("CLICK ADD PLAYER: ", players[playerIndex].short_name);
            addPlayerToTeam(players[playerIndex], position2Fill);
            setShowPlayerModal(false);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            viewBox="0 0 20 20"
            fill="#00ED64"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
