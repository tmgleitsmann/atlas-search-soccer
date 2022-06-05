import { useState, useEffect } from "react";

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [players, setPlayers] = useState([]);
  const [dreamTeam, setDreamTeam] = useState(emptyTeam);
  const [showDreamTeam, setShowDreamTeam] = useState(true);
  const [operator, setOperator] = useState("text");
  const [submitted, setSubmitted] = useState(false);
  const [showPlayerChoices, setShowPlayerChoices] = useState(false);

  const TextEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/players";
  const WildcardEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/wildcard";

  const getPlayers = async () => {
    let API = TextEndPoint;
    if (operator === "wildcard") API = WildcardEndPoint;

    const url = `${API}?searchTerm=${searchTerm}`;

    const playersJSON = await (await fetch(url)).json();

    if (playersJSON && playersJSON.length > 0) {
      setShowPlayerChoices(true);
      setPlayers(playersJSON);
    }
  };

  const getTeam = async () => {
    const dreamPlayers = await (
      await fetch(
        "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/getTeam"
      )
    ).json();
    setDreamTeam(dreamPlayers);
  };

  useEffect(() => {
    if (!submitted) return;
    getPlayers();
    setSubmitted(false);
    console.log(operator);
    // eslint-disable-next-line
  }, [submitted]);

  useEffect(() => {
    if (!showDreamTeam) return;
    getTeam();
    setShowDreamTeam(false);

    // eslint-disable-next-line
  }, [showDreamTeam]);

  return {
    operator,
    setOperator,
    searchTerm,
    setSearchTerm,
    players,
    setPlayers,
    setShowDreamTeam,
    dreamTeam,
    setDreamTeam,
    submitted,
    setSubmitted,
    showPlayerChoices,
    setShowPlayerChoices,
  };
};

const emptyTeam = [
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
