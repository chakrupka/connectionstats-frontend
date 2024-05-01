import PropTypes from "prop-types";
import { getTodaysGames } from "../../services/services.js";
import { newDate, printDate } from "../../utils/formatDate.js";
import { useEffect, useState } from "react";
import Podium from "./assets/podium.svg";
import "./Leaderboard.css";

const Leaderboard = ({ setPage }) => {
  const [games, setGames] = useState(null);
  useEffect(() => {
    handleGetGames();
  }, []);

  const handleGetGames = async () => {
    const res = await getTodaysGames();
    if (res) {
      console.log("Fetched games");
      setGames(res.sort((a, b) => b.score - a.score));
    } else {
      console.log("Failed to load games");
    }
  };

  return (
    <div>
      <div className="backButton" onClick={() => setPage(0)}>
        Home
      </div>
      <div className="lbMain">
        <div className="lbDate">
          <div>{printDate(newDate())}</div>
          <div>#{games && games[0].number}</div>
        </div>
        <div className="lbPodiumContainer">
          <div className="lbPodiumSection">
            <div className="lbPodiumName">
              {games ? (games[1] ? games[1].user : "") : "Loading..."}
            </div>
            <div className="lbPodium second">2</div>
          </div>
          <div className="lbPodiumSection">
            <div className="lbPodiumName">
              {games ? (games[0] ? games[0].user : "") : "Loading..."}
            </div>
            <div className="lbPodium first">1</div>
          </div>
          <div className="lbPodiumSection">
            <div className="lbPodiumName">
              {games ? (games[2] ? games[2].user : "") : "Loading..."}
            </div>
            <div className="lbPodium third">3</div>
          </div>
        </div>
        <div className="lbTitle">Leaderboard</div>
        <div className="lbSecTitles">
          <div className="lbSec rank">Rank</div>
          <div className="lbSec name">Name</div>
          <div className="lbSec score">Score</div>
          <div className="lbSec tries">Guesses</div>
        </div>
        <div className="lbLine"></div>
        <div>
          {games ? (
            <div>
              {games.map((game, index) => {
                return (
                  <div key={index} className="lbInfoSec">
                    <div className="lbList rank">{index + 1}.</div>
                    <div className="lbList name">{game.user}</div>
                    <div className="lbList score">
                      {game.score ? game.score : "✗"}
                    </div>
                    <div className="lbList tries">{game.tries}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

Leaderboard.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Leaderboard;
