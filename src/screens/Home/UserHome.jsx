import { Link } from "react-router-dom";
import getPuzzleNum from "../../utils/getPuzzleNum";
import "./Home.css";

const UserHome = ({ user }) => {
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
      {/* <div style={{ fontSize: "6.5dvh" }}>Connections Stats</div>
      <div style={{ fontSize: "2.5dvh", marginTop: "-0.5dvh" }}>
        Created with ❤️ by{" "}
        <a className="smallLinkText" href="https://linkedin.com/in/cha-krupka">
          Cha
        </a>
      </div> */}
      <div style={{ fontSize: "5dvh", marginTop: "-5dvh" }}>
        Hello, {user.name}!
      </div>
      <div
        style={{ fontSize: "4dvh", marginBottom: "5dvh", marginTop: "1dvh" }}
      >
        Today's puzzle is #{getPuzzleNum()}
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
        <Link className="homeButton" to={"submit"}>
          📥 &nbsp;Submit Game
        </Link>
        <Link className="homeButton" to={"leaderboard"}>
          📆 &nbsp;Leaderboard
        </Link>
        <Link className="homeButton" to={"stats"}>
          📊 &nbsp;View Stats
        </Link>
        <Link className="homeButton" to={"settings"}>
          ⚙️&nbsp;User Settings
        </Link>
      </div>
      {/* <div
        style={{
          fontSize: 18,
          position: "relative",
          bottom: "-18dvh",
        }}
      >
        <a
          className="smallLinkText"
          href="https://www.nytimes.com/2024/02/19/us/how-i-designed-my-perfect-connections-solve.html"
        >
          Scoring
        </a>{" "}
        |{" "}
        <a
          className="smallLinkText"
          href="https://github.com/chakrupka/connectionstats-frontend"
        >
          Codebase
        </a>
      </div> */}
    </div>
  );
};

export default UserHome;
