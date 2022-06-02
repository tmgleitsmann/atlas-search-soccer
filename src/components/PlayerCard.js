import React from "react";

const PlayerCard = ({ player, DreamTeamComponent, handleDreamTeamClick }) => {
  const AddDreamTeamComponent = DreamTeamComponent;
  return (
    <div
      onClick={() => handleDreamTeamClick(player)}
      className="group relative justify-center text-center shadow-xl p-6 border-solid border border-indigo-100 transition duration-500 transform hover:scale-110"
    >
      <div className="">{player.long_name}</div>
      <div className="flex justify-evenly mt-4">
        <img src={player.nation_flag_url} alt="flag"></img>
        <div>{player.nationality_name}</div>
        <div>{player.nation_jersey_number}</div>
      </div>
      <img
        src={player.player_face_url}
        alt="player-face"
        className="rounded-full mt-2  mx-auto w-24"
      ></img>

      <div className="flex justify-evenly items-center mt-4">
        <img src={player.club_logo_url} alt="flag" className="w-12"></img>
        <div>{player.club_name}</div>
        <div>{player.club_jersey_number}</div>
      </div>
      <div className=" border border-green-400 rounded-full p-1 w-20 mx-auto">
        {" "}
        {player.overall}
      </div>
      {/* <div className="text-sm mt-2">{player.player_traits}</div> */}

      <div className="bottom-bar">
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
  );
};

export default PlayerCard;