import { Link } from "react-router-dom";
import dateUtils from "../../utils/date_utils.js";
import "./Home.css";
import { useSelector } from "react-redux";

const UserHome = () => {
  const user = useSelector((state) => state.user);
  const stats = useSelector((state) => state.stats);

  const StreakBanner = () => {
    if (!stats || Object.keys(stats).length === 0) {
      return <div className="streakBanner">Checking streak...</div>;
    } else if (stats.currentStreak === 0 || stats.currentStreak == null) {
      return <div className="streakBanner">You are not on a streak 😢</div>;
    } else {
      return (
        <div style={{ display: "flex" }}>
          You are on a<div className="streakDay">{stats.currentStreak}</div>
          day streak 🥳
        </div>
      );
    }
  };

  return (
    <div
      style={{
        height: "100dvh",
        width: "100dvw",
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
