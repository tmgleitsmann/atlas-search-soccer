import { useState, useEffect } from "react";

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [position2Fill, setPosition2Fill] = useState(100);
  const [players, setPlayers] = useState([]);
  const [dreamTeam, setDreamTeam] = useState(dreamTeamArray);
  //  const [highlightCard, setHighlightCard] = useState(null);
  const [dreamNames, setDreamNames] = useState([]);
  const [operator, setOperator] = useState("text");
  const [submitted, setSubmitted] = useState(false);

  const TextEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/players";
  const WildcardEndPoint = "";

  const getPlayers = async () => {
    const API = TextEndPoint;
    const url = `${API}?searchTerm=${searchTerm}`;

    const response = await fetch(url);
    const playersJSON = await response.json();

    if (playersJSON && playersJSON.length > 0) {
      setPlayers(playersJSON);
    }
  };
  //   const saveToLocalStorage = (items) => {
  //     localStorage.setItem("fifa-dream-team", JSON.stringify(items));
  //   };

  useEffect(() => {
    if (!submitted) return;
    getPlayers();
    setSubmitted(false);
    // eslint-disable-next-line
  }, [submitted]);

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

  return {
    operator,
    setOperator,
    searchTerm,
    setSearchTerm,
    players,
    setPlayers,
    dreamNames,
    dreamTeam,
    setDreamTeam,
    submitted,
    setSubmitted,
  };
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
