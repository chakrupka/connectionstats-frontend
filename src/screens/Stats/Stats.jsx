import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Stats = ({ userProp }) => {
  const user = useSelector((state) => state.user);
  const userGames = useSelector((state) => state.userGames);
  const stats = useSelector((state) => state.stats);

  const StatTable = () => (
    <div style={{ marginTop: "5dvh", fontSize: "5dvh" }}>
      <div>Current Streak: {stats.currentStreak}</div>
      <div>Longest Streak: {stats.longestStreak}</div>
      <div>Games Attempted: {stats.totalGames}</div>
      <div>Games Solved: {stats.solvedGames}</div>
      <div>
        Solve Rate: {stats.solvePercent != NaN ? stats.solvePercent : 0}%
      </div>
    </div>
  );

  return (
    <div style={{ width: "99dvw", height: "95dvh", marginTop: "4dvh" }}>
      <Link to={"/home"} className="backButton">
        Home
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100dvh",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-10dvh",
          fontSize: "4dvh",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "6dvh" }}>My Stats</div>
        <div style={{ width: "50dvh" }}>{stats && <StatTable />}</div>
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
