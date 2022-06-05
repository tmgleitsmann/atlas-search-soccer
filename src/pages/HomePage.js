// Dependencies
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlayerGrid from "../components/PlayerGrid";
import DreamTeamGrid from "../components/DreamTeamGrid";
import SearchBar from "../components/SearchBar";
import Add2Team from "../components/Add2Team";
import RelegateFromTeam from "../components/RelegateFromTeam";
import EmptyPlayerCard from "../components/EmptyPlayerCard";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("Messi");
  const [position2Fill, setPosition2Fill] = useState(100);
  const [players, setPlayers] = useState([]);
  const [dreamTeam, setDreamTeam] = useState(dreamTeamArray);
  const [highlightCard, setHighlightCard] = useState(null);
  const [dreamNames, setDreamNames] = useState([]);

  let navigate = useNavigate();

  const getPlayers = async () => {
    const API =
      "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/players";
    const url = `${API}?searchTerm=${searchTerm}`;

    const response = await fetch(url);
    const playersJSON = await response.json();

    if (playersJSON && playersJSON.length > 0) {
      setPlayers(playersJSON);
    }
  };

  useEffect(() => {
    getPlayers();
    // eslint-disable-next-line
  }, [searchTerm]);

  useEffect(() => {
    const dreamPlayers = JSON.parse(localStorage.getItem("fifa-dream-team"));

    setDreamTeam(dreamPlayers);
    const playerNames = [];
    dreamPlayers.forEach((p) => {
      if (p.player.short_name !== undefined) {
        console.log(p.player.short_name);
        playerNames.push(p.player.short_name);
      }
    });
    setDreamNames(playerNames);
    console.log(playerNames);

    // eslint-disable-next-line
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("fifa-dream-team", JSON.stringify(items));
  };

  const addPlayerToTeam = (player, spot) => {
    console.log("Trying to add player.");
    console.log("IN ADDING PLAYER FUNCTION:", spot);

    if (position2Fill !== 100) {
      setDreamTeam(
        dreamTeam.map((member) =>
          member.spot === spot
            ? {
                ...member,
                player: player,
              }
            : { ...member }
        )
      );

      saveToLocalStorage(dreamTeam);

      setHighlightCard(null);
    }
  };

  const relegatePlayerFromTeam = (pos) => {
    console.log(`Trying to remove player ${pos}.`);

    setPosition2Fill(pos);

    setDreamTeam(
      dreamTeam.map((member) =>
        member.spot === pos
          ? {
              ...member,
              player: {},
            }
          : { ...member }
      )
    );

    saveToLocalStorage(dreamTeam);
  };

  return (
    <div className="min-h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={() => navigate("/search")}
      >
        <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
          clipRule="evenodd"
        />
      </svg>
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
        addPlayerToTeam={addPlayerToTeam}
        position2Fill={position2Fill}
        setPosition2Fill={setPosition2Fill}
        setHighlightCard={setHighlightCard}
        highlightCard={highlightCard}
        dreamTeam={dreamTeam}
        dreamNames={dreamNames}
      />
      <div className="flex mx-20 w-full ">
        <div className=" text-2xl mt-10">Dream Team</div>
      </div>

      <DreamTeamGrid
        players={dreamTeam}
        DreamTeamComponent={RelegateFromTeam}
        relegatePlayerFromTeam={relegatePlayerFromTeam}
        position2Fill={position2Fill}
        setPosition2Fill={setPosition2Fill}
        setHighlightCard={setHighlightCard}
        highlightCard={highlightCard}
      />
    </div>
  );
};

let dreamTeamArray = [
  {
    spot: 0,
    position: "goalie",
    player: {},
  },
  {
    spot: 1,
    position: "left-back",
    player: {},
  },
  {
    spot: 2,
    position: "center-back-left",
    player: {},
  },
  {
    spot: 3,
    position: "center-back-right",
    player: {},
  },
  {
    spot: 4,
    position: "right-back",
    player: {},
  },
  {
    spot: 5,
    position: "left-wing",
    player: {},
  },
  {
    spot: 6,
    position: "center-mid",
    player: {},
  },
  {
    spot: 7,
    position: "right-wing",
    player: {},
  },
  {
    spot: 8,
    position: "forward-left",
    player: {},
  },
  {
    spot: 9,
    position: "forward-center",
    player: {},
  },
  {
    spot: 10,
    position: "forward-right",
    player: {},
  },
];

export default HomePage;
