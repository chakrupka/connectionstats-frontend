import PropTypes from "prop-types";
import getTodaysGames from "../../services/services.js";

const Leaderboard = ({ setPage }) => {
  return (
    <div className="mainLeaderboard">
      <div className="backButton" onClick={() => setPage(0)}>
        Home
      </div>
      <div
        style={{
          width: "100dvw",
          textAlign: "center",
          marginTop: 100,
          fontSize: 20,
        }}
      >
        Work in progress!
      </div>
    </div>
  );
};

Leaderboard.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Leaderboard;
