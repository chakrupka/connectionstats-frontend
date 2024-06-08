import { Link } from "react-router-dom";
import getPuzzleNum from "../../utils/getPuzzleNum";
import "./Home.css";

const GuestHome = () => {
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
      <div style={{ fontSize: "8dvh", marginTop: "-2dvh" }}>
        Connections
        <br />
        Stats
      </div>
      <div
        style={{
          fontSize: "2.5dvh",
          position: "relative",
          top: "-7.8vh",
          left: "12dvh",
        }}
      >
        Made with ❤️
        <br />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by&nbsp;
        <a className="smallLinkText" href="https://linkedin.com/in/cha-krupka">
          Cha
        </a>
      </div>
      <div
        style={{ fontSize: "3.5dvh", marginBottom: "0dvh", marginTop: "-3dvh" }}
      >
        Today's Puzzle
      </div>
      <a
        href="https://www.nytimes.com/games/connections"
        style={{
          fontSize: "7dvh",
          marginBottom: "5dvh",
          cursor: "pointer",
          textDecoration: "none",
          marginLeft: "-1dvh",
        }}
      >
        #{getPuzzleNum()}
      </a>
      <div
        style={{
          fontSize: "4dvh",
          textAlign: "center",
          marginBottom: "2dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3dvh",
        }}
      >
        <Link className="homeButton" to={"/setup"}>
          🐛 &nbsp;New User
        </Link>
        <Link className="homeButton" to={"/login"}>
          🦋 &nbsp;Returning User
        </Link>
        <Link className="homeButton" to={"leaderboard"}>
          📆 &nbsp;Leaderboard
        </Link>
      </div>
    </div>
  );
};

export default GuestHome;
