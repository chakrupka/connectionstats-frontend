import { prepGame } from "../../utils/format_game.js";
import { sendGame } from "../../services/game_service.js";
import "./SubmitGame.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllData,
  loadUserGames,
  loadUserStats,
} from "../../utils/redux_loaders.js";
import Banner from "../../components/Banner.jsx";

const SubmitGame = () => {
  const [newGame, setNewGame] = useState("");
  const [results, setResults] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const topGames = useSelector((state) => state.topGames);

  const placeholder = `Instructions:
  1. Open NYTimes Games
  2. Go to Connections
  3. "View Results"
  4. "Share Your Results"
  5. If on mobile, find the "Copy" option
  6. Return & "Paste Game"
  7. Accept prompts
  8. Submit`;

  const handleGameChange = (event) => {
    setNewGame(event.target.value);
  };

  const submitGame = (event) => {
    event.preventDefault();
    const preGame = prepGame(newGame);
    handleSendGame(preGame);
  };

  const handleSendGame = async (game) => {
    const res = await sendGame(game, user.token);
    if (!res.response) {
      console.log("Game sent succesfully");
      setResults(res);
      if (!topGames.topToday) {
        await loadUserGames(user.token, dispatch);
        await loadUserStats(user.token, dispatch);
      } else {
        await loadAllData(user.token, dispatch);
      }
    } else {
      if (res.response.status === 409) {
        alert("You've already submitted a game for this day");
      }
      console.log("Failed to send game");
    }
  };

  const pasteClipboardContent = () => {
    navigator.clipboard.readText().then((text) => {
      setNewGame(text);
    });
  };

  return (
    <div style={{ marginTop: "4dvh" }}>
      <Banner />
      <div className="inputSection">
        {!results ? (
          <form onSubmit={submitGame} className="gameForm">
            <button
              type="button"
              className="submitButton"
              onClick={() => pasteClipboardContent()}
            >
              Paste Game
            </button>
            <textarea
              value={newGame}
              onChange={handleGameChange}
              className="gameInput"
              id="paste-target"
              placeholder={placeholder}
            />
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        ) : (
          <div className="results">
            <div>Completed: {results.score ? "Yes" : "No"}</div>
            <div>Number of guesses: {results.tries}</div>
            <div>Score: {results.score ? results.score : "0"}</div>
            <Link to={"/leaderboard"} className="checkLeaderboard">
              Check Leaderboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmitGame;
