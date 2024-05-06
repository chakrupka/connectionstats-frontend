import PropTypes from "prop-types";
import { getTodaysGames, getAllGames } from "../../services/services.js";
import { newDate, printDate } from "../../utils/formatDate.js";
import { useEffect, useState } from "react";
import "./Leaderboard.css";

const Leaderboard = ({ setPage }) => {
  const [todaysGames, setTodaysGames] = useState(null);
  const [allGames, setAllGames] = useState(null);
  useEffect(() => {
    handleGetToday();
    handleGetAll();
    // setGames([]);
  }, []);

  const handleGetToday = async () => {
    const res = await getTodaysGames();
    if (res) {
      console.log("Fetched games");
      setTodaysGames(res.sort((a, b) => b.score - a.score));
    } else {
      console.log("Failed to load games");
    }
  };

  const handleGetAll = async () => {
    const res = await getAllGames();
    if (res) {
      console.log("Fetched games");
      setAllGames(res.sort((a, b) => b.score - a.score));
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
          <div>
            {todaysGames && todaysGames.length > 0
              ? `#${todaysGames[0].number}`
              : ""}
          </div>
        </div>
        <div className="lbPodiumContainer">
          <div className="lbPodiumSection">
            <div className="lbPodiumName">
              {todaysGames
                ? todaysGames[1]
                  ? todaysGames[1].user
                  : ""
                : "Loading..."}
            </div>
            <div className="lbPodium second">2</div>
          </div>
          <div className="lbPodiumSection">
            <div className="lbPodiumName">
              {todaysGames
                ? todaysGames[0]
                  ? todaysGames[0].user
                  : ""
                : "Loading..."}
            </div>
            <div className="lbPodium first">1</div>
          </div>
          <div className="lbPodiumSection">
            <div className="lbPodiumName">
              {todaysGames
                ? todaysGames[2]
                  ? todaysGames[2].user
                  : ""
                : "Loading..."}
            </div>
            <div className="lbPodium third">3</div>
          </div>
        </div>
        <div className="lbTitle">Leaderboard</div>
        <div className="lbSecTitles">
          <div className="lbSecTitle rank">Rank</div>
          <div className="lbSecTitle name">Name</div>
          <div className="lbSecTitle score">Score</div>
          <div className="lbSecTitle tries">Guesses</div>
        </div>
        <div className="lbLine"></div>
        <div className="lbList">
          {todaysGames ? (
            <>
              <div className="lbListCol rank">
                {todaysGames.map((game, index) => (
                  <div key={index}>{index + 1}.</div>
                ))}
              </div>
              <div className="lbListCol name">
                {todaysGames.map((game, index) => (
                  <div key={index}>{game.user}</div>
                ))}
              </div>
              <div className="lbListCol score">
                {todaysGames.map((game, index) => (
                  <div key={index}>{game.score}</div>
                ))}
              </div>
              <div className="lbListCol tries">
                {todaysGames.map((game, index) => (
                  <div key={index}>{game.tries}</div>
                ))}
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="lbTitle">All Time</div>
        <div className="lbSecTitles">
          <div className="lbSecTitle rank">Rank</div>
          <div className="lbSecTitle name">Name</div>
          <div className="lbSecTitle score">Score</div>
          <div className="lbSecTitle game">Game</div>
        </div>
        <div className="lbLine"></div>
        <div className="lbList">
          {allGames ? (
            <>
              <div className="lbListCol rank">
                {allGames.slice(0, 10).map((game, index) => (
                  <div key={index}>{index + 1}.</div>
                ))}
              </div>
              <div className="lbListCol name">
                {allGames.slice(0, 10).map((game, index) => (
                  <div key={index}>{game.user}</div>
                ))}
              </div>
              <div className="lbListCol score">
                {allGames.slice(0, 10).map((game, index) => (
                  <div key={index}>{game.score}</div>
                ))}
              </div>
              <div className="lbListCol number">
                {allGames.slice(0, 10).map((game, index) => (
                  <div key={index}>#{game.number}</div>
                ))}
              </div>
            </>
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
