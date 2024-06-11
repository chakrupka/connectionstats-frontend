import { prepGame } from "../../utils/format_game.js";
import { sendGame, setToken } from "../../services/game_service.js";
import "./SubmitGame.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SubmitGame = () => {
  const [newGame, setNewGame] = useState("");
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setToken(user.token);
    } else {
      navigate("/home");
    }
  }, []);

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
    console.log(newGame);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(newGame);
  };

  const submitGame = (event) => {
    event.preventDefault();
    console.log(newGame);
    const preGame = prepGame(newGame);
    handleSendGame(preGame);
  };

  const handleSendGame = async (game) => {
    const res = await sendGame(game);
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
