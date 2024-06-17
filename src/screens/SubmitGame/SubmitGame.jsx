import { prepGame } from "../../utils/format_game.js";
import { sendGame } from "../../services/game_service.js";
import "./SubmitGame.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SubmitGame = () => {
  const [newGame, setNewGame] = useState("");
  const [results, setResults] = useState(null);
  const user = useSelector((state) => state.user);

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
    console.log(user.token);
    if (res) {
      console.log("Game sent succesfully", res);
      setResults(res);
    } else {
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
      <Link to={"/home"} className="backButton">
        Home
      </Link>
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
