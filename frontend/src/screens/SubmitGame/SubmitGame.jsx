import formatGame from "../../utils/formatGame.js";
import sendGame from "../../services/services.js";
import "./SubmitGame.css";
import { useState } from "react";
import PropTypes from "prop-types";

const SubmitGame = ({ setPage }) => {
  const [newGame, setNewGame] = useState("");
  const [results, setResults] = useState(null);

  const handleGameChange = (event) => {
    setNewGame(event.target.value);
    console.log(newGame);
  };

  const submitGame = (event) => {
    event.preventDefault();
    console.log(newGame);
    const preGame = formatGame(newGame);
    handleSendGame(preGame);
  };

  const handleSendGame = async (game) => {
    const res = await sendGame(game);
    if (res) {
      console.log("Game sent succesfully", res);
      setResults(res.data);
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
    <div className="mainSubmit">
      <div className="backButton" onClick={() => setPage(0)}>
        Home
      </div>
      <div className="inputSection">
        {!results && (
          <form onSubmit={submitGame} className="gameForm">
            <button
              type="button"
              className="submitButton"
              onClick={() => pasteClipboardContent()}
            >
              Paste
            </button>
            <textarea
              value={newGame}
              onChange={handleGameChange}
              className="gameInput"
              id="paste-target"
            />
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        )}
        {results && (
          <div className="results">
            <div>Completed: {results.score ? "Yes" : "No"}</div>
            <div>Number of guesses: {results.tries}</div>
            <div>Score: {results.score ? results.score : "0"}</div>
            <div className="checkLeaderboard" onClick={() => setPage(2)}>
              Check Leaderboard
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SubmitGame.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default SubmitGame;
