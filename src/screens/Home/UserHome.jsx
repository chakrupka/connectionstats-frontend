import { Link } from "react-router-dom";
import dateUtils from "../../utils/date_utils.js";
import "./Home.css";
import { useEffect, useState } from "react";
import { getUserGames, setToken } from "../../services/game_service.js";
import stats from "../../utils/stats.js";
import { useSelector } from "react-redux";

const UserHome = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [games, setGames] = useState(null);
  const [loadingGames, setLoadingGames] = useState(true);

  useEffect(() => {
    console.log("Loading games...");
    setToken(user.token);
    const loadGames = async () => {
      const loadedGames = await getUserGames();
      console.log("Loaded games:", loadedGames);
      setGames(loadedGames);
      setLoadingGames(false);
    };
    loadGames();
  }, []);

  const StreakBanner = () => {
    const [streak, setStreak] = useState("Checking streak...");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!loadingGames) {
        setTimeout(() => {
          const currentStreak = stats.currentStreak(games);
          setLoading(false);
        }, 500);
      }
    }, []);

    if (loading) {
      return (
        <div style={{ marginTop: "-2.5dvh", marginBottom: "1dvh" }}>
          Checking streak...
        </div>
      );
    }

    if (!loadingGames) {
      const streak = stats.currentStreak(games);
      console.log(streak);
      if (!streak) {
        return (
          <div style={{ marginTop: "-2.5dvh", marginBottom: "1dvh" }}>
            You are not on a streak 😢
          </div>
        );
      }
      return (
        <div style={{ display: "flex" }}>
          You are on a
          <div
            style={{
              fontSize: "7dvh",
              textAlign: "center",
              marginTop: "-2.75dvh",
              marginLeft: "2dvh",
              marginRight: "2dvh",
            }}
          >
            {streak}
          </div>
          day streak 🥳
        </div>
      );
    }
  };

  return (
    <div
      style={{
        height: "99dvh",
        width: "99dvw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "5dvh", marginTop: "-5dvh" }}>
        Hello, {user.name}!
      </div>
      <div
        style={{ fontSize: "4dvh", marginBottom: "4dvh", marginTop: "1dvh" }}
      >
        Today's puzzle is #{dateUtils.getTodayPuzzleNum()}
      </div>
      <div style={{ fontSize: "3dvh", marginBottom: "2dvh" }}>
        <StreakBanner />
      </div>
      <div
        style={{
          fontSize: "4dvh",
          textAlign: "center",
          marginBottom: "-5dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3dvh",
        }}
      >
        <Link className="navButton" to={"/submit"}>
          📥 &nbsp;Submit Game
        </Link>
        <Link className="navButton" to={"/leaderboard"}>
          📆 &nbsp;Leaderboard
        </Link>
        <Link className="navButton" to={"/stats"}>
          📊 &nbsp;View Stats
        </Link>
        <Link className="navButton" to={"/settings"}>
          ⚙️&nbsp;User Settings
        </Link>
      </div>
    </div>
  );
};

export default UserHome;
