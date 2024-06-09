import { useEffect } from "react";
import { useState } from "react";
import { getUserGames, setToken } from "../../services/game_service";
import { Link } from "react-router-dom";
import stats from "../../utils/stats";

const Stats = ({ userProp }) => {
  const [games, setGames] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingGames, setLoadingGames] = useState(true);

  useEffect(() => {
    console.log("Loading user...");
    if (!userProp) {
      const loggedUserJSON = window.localStorage.getItem("loggedUser");
      if (loggedUserJSON) {
        const parsedUser = JSON.parse(loggedUserJSON);
        setUser(parsedUser);
        setToken(parsedUser.token);
        console.log("Loaded user:", parsedUser);
      } else {
        navigate("/");
      }
    } else {
      setUser(userProp);
      setToken(userProp.token);
    }
  }, []);

  useEffect(() => {
    console.log("Loading games...");
    const loadGames = async () => {
      const loadedGames = await getUserGames();
      console.log("Loaded games:", loadedGames);
      setGames(loadedGames);
      setLoadingGames(false);
    };
    loadGames();
  }, []);

  const Stats = () => (
    <div style={{ marginTop: "5dvh", fontSize: "5dvh" }}>
      <div>Current Streak: {stats.currentStreak(games)}</div>
      <div>Longest Streak: {stats.longestStreak(games)}</div>
      <div>Games solved: {stats.numSolved(games)}</div>
      <div>
        Solve rate: {((stats.numSolved(games) * 100) / games.length).toFixed(0)}
        %
      </div>
    </div>
  );

  return (
    <div style={{ width: "99dvw", height: "95dvh", marginTop: "4dvh" }}>
      <Link to={"/"} className="backButton">
        Home
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "8%",
          width: "84%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-10dvh",
          fontSize: "4dvh",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "6dvh" }}>My Stats</div>
        <div style={{ width: "50dvh" }}>{!loadingGames && <Stats />}</div>
        <div
          style={{
            fontSize: "2dvh",
            width: "40dvh",
            position: "absolute",
            bottom: "10dvh",
          }}
        >
          This page is a work in progress. More advanced statistics are on their
          way.
        </div>
      </div>
    </div>
  );
};

export default Stats;
