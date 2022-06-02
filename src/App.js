// Dependencies
import React, { useState, useEffect } from "react";
import PlayerGrid from "./components/PlayerGrid";
import SearchBar from "./components/SearchBar";
import Add2Team from "./components/Add2Team";
import RelegateFromTeam from "./components/RelegateFromTeam";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Messi");
  const [dreamTeam, setDreamTeam] = useState([]);

  const getPlayers = async () => {
    const API =
      "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/players";
    const url = `${API}?searchTerm=${searchTerm}`;

    const response = await fetch(url);
    const playersJSON = await response.json();
    console.log(playersJSON);
    if (playersJSON && playersJSON.length > 0) {
      setPlayers(playersJSON);
    }
  };

  useEffect(() => {
    getPlayers();
    // eslint-disable-next-line
  }, [searchTerm]);

  const addPlayer2Team = (player) => {
    const newDreamTeam = [...dreamTeam, player];
    setDreamTeam(newDreamTeam);
  };

  const relegatePlayerFromTeam = (player) => {
    const newDreamTeam = dreamTeam.filter(
      (member) => member._id !== player._id
    );
    setDreamTeam(newDreamTeam);
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-center text-4xl text-blue-900">
        Atlas Search Soccer
      </h2>
      <div className="flex mx-20 w-full justify-evenly items-center">
        <div className=" text-2xl">Ballers</div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <PlayerGrid
        header={searchTerm ? null : "Player Search Results"}
        players={players}
        DreamTeamComponent={Add2Team}
        handleDreamTeamClick={addPlayer2Team}
      />
      <div className="flex mx-20 w-full ">
        <div className=" text-2xl mt-10">Dream Team</div>
      </div>
      <PlayerGrid
        players={dreamTeam}
        DreamTeamComponent={RelegateFromTeam}
        handleDreamTeamClick={relegatePlayerFromTeam}
      />
    </div>
  );
};

export default App;
