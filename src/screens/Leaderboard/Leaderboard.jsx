import {
  getTopGamesToday,
  getTopGamesAll,
} from "../../services/game_service.js";
import dateUtils from "../../utils/date_utils.js";
import { useEffect, useState } from "react";
import "./Leaderboard.css";
import { getColorArray } from "../../utils/format_game.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addTopAllTimeGames,
  addTopTodayGames,
} from "../../reducers/top_games_reducer.js";

const Leaderboard = () => {
  const [showGamePopup, setShowGamePopup] = useState(false);
  const [popupGame, setPopupGame] = useState(null);
  const [banner, setBanner] = useState("");
  const topGames = useSelector((state) => state.topGames);
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetTodaysGames();
    handleGetAllGames();
    setBanner("Major updates to the leaderboard coming soon!");
    setTimeout(() => {
      setBanner("");
    }, 5000);
  }, []);

  const handleGetTodaysGames = async () => {
    const res = await getTopGamesToday();
    if (res) {
      dispatch(addTopTodayGames(res));
      // setTopToday(res);
    } else {
      console.log("Failed to load top games today");
    }
  };

  const handleGetAllGames = async () => {
    const res = await getTopGamesAll();
    if (res) {
      dispatch(addTopAllTimeGames(res));
      // setTopAll(res);
    } else {
      console.log("Failed to load top games all time)");
    }
  };

  const handleNameClick = (info, event) => {
    event.stopPropagation();
    handleShowPopup(info);
  };

  const handleShowPopup = (info) => {
    setPopupGame(info);
    setShowGamePopup(true);
    document.addEventListener("click", handleClosePopup);
  };

  const handleClosePopup = () => {
    document.removeEventListener("click", handleClosePopup);
    setShowGamePopup(false);
    setPopupGame(null);
  };

  return (
    <div style={{ marginTop: "4dvh" }}>
      <Link to={"/home"} className="backButton">
        Home
      </Link>
      <>
        {showGamePopup && (
          <div className="lbPopupScreen">
            <div className="lbPopup">
              <div>Connections</div>
              <div>Puzzle #{popupGame.number}</div>
              <>
                {getColorArray(popupGame).map((row, index) => (
                  <div key={index}>{row}</div>
                ))}
              </>
              <div className="lbPopupCloseText">Tap anywhere</div>
            </div>
          </div>
        )}
      </>
      <div className="lbMain">
        {banner !== "" && <div className="lbMessageBanner">{banner}</div>}
        <div className="lbDate">
          <div>{dateUtils.prettyStrDate(dateUtils.newDateEST())}</div>
          <div>#{dateUtils.getTodayPuzzleNum()}</div>
        </div>
        <div className="lbPodiumContainer">
          <div className="lbPodiumSection">
            <div className="lbPodiumName">
              {topGames.topToday
                ? topGames.topToday[1]
                  ? topGames.topToday[1].user.username
                  : ""
                : "Loading..."}
            </div>
            <div className="lbPodium second">2</div>
          </div>
          <div className="lbPodiumSection">
            <div className="lbPodiumName">
              {topGames.topToday ? (
                topGames.topToday[0] ? (
                  topGames.topToday[0].user.username
                ) : (
                  <span>&nbsp;</span>
                )
              ) : (
                "Loading..."
              )}
            </div>
            <div className="lbPodium first">1</div>
          </div>
          <div className="lbPodiumSection">
            <div className="lbPodiumName">
              {topGames.topToday
                ? topGames.topToday[2]
                  ? topGames.topToday[2].user.username
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
          <div className="lbSecTitle tries">Errors</div>
        </div>
        <div className="lbLine"></div>
        <div className="lbList">
          {topGames.topToday ? (
            <>
              <div className="lbListCol rank">
                {topGames.topToday.map((game, index) => (
                  <div key={index}>{index + 1}.</div>
                ))}
              </div>
              <div className="lbListCol name">
                {topGames.topToday.map((game, index) => (
                  <div
                    key={index}
                    onClick={(event) => handleNameClick(game, event)}
                  >
                    {game.user.username}
                  </div>
                ))}
              </div>
              <div className="lbListCol score">
                {topGames.topToday.map((game, index) => (
                  <div key={index}>{game.score ? game.score : "✗"}</div>
                ))}
              </div>
              <div className="lbListCol tries">
                {topGames.topToday.map((game, index) => (
                  <div key={index}>{-4 + game.tries}</div>
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
          {topGames.topAllTime ? (
            <>
              <div className="lbListCol rank">
                {topGames.topAllTime.slice(0, 10).map((game, index) => (
                  <div key={index}>{index + 1}.</div>
                ))}
              </div>
              <div className="lbListCol name">
                {topGames.topAllTime.slice(0, 10).map((game, index) => (
                  <div
                    key={index}
                    onClick={(event) => handleNameClick(game, event)}
                  >
                    {game.user.username}
                  </div>
                ))}
              </div>
              <div className="lbListCol score">
                {topGames.topAllTime.slice(0, 10).map((game, index) => (
                  <div key={index}>{game.score}</div>
                ))}
              </div>
              <div className="lbListCol number">
                {topGames.topAllTime.slice(0, 10).map((game, index) => (
                  <div key={index}>{game.number}</div>
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

export default Leaderboard;
